<?php

namespace cornflower;

use \PDO;

/**
 * データベースに値を保存するコンテンツ
 */
abstract class Contents
{
    /** @var string */
    protected static $table = 'EDIT THIS';

    public static function exists(string $uuid)
    {
        $query = "SELECT EXISTS (SELECT * FROM `" . static::$table . "` WHERE `uuid`='$uuid');";
        $stmt = Cornflower::getPdo()->query($query);
        return boolval($stmt->fetch(PDO::FETCH_ASSOC));
    }

    /** @var string */
    protected $uuid;

    /** @var string[] */
    protected $properties;

    /**
     * @param string $uuid アイテムのUUID
     * @param array $properties [static::PROPERTY_XXX => value]
     */
    public function __construct(string $uuid, array $properties = [])
    {
        $this->uuid = $uuid;
        $this->setProperties($properties);
    }

    /**
     * UUIDの取得
     *
     * @return string UUID
     */
    public function getUuid()
    {
        return $this->uuid;
    }

    /**
     * データベースからの読み出し
     * 
     * @param string $type static::PROPERTY_XXX 推奨 UUIDは getUuid()
     * @param bool $no_cache キャッシュ使いたくない(データベースの生の値を読み取りたい)時は true
     */
    public function getProperty(string $type, bool $no_cache = false): ?string
    {
        $pdo = Cornflower::getPdo();
        $query = "SELECT `$type` FROM `" . static::$table . "` WHERE `uuid`='$this->uuid';";
        $stmt = $pdo->query($query);
        if ($stmt) {
            $data = $stmt->fetch(PDO::FETCH_NUM);
            return $data[0];
        }

        return null;
    }

    /**
     * データベースに保存
     * setProperty (単数)もいるか…？
     * @param array $properties 必ず配列で！Note::PROPERTY_XXX => VALUE
     */
    public function setProperties(array $properties): bool
    {
        // 空は無視
        if(empty($properties)) return false;
        // PDO取得
        $pdo = Cornflower::getPdo();
        // UUIDが存在するか
        if (static::exists($this->uuid)) {
            // クエリ作成
            $query = "UPDATE " . static::$table . " SET ";
            foreach ($properties as $key => $value) {
                $query .= "`$key`='" . $this->escape($value) . "',";
            }
            //コンマ一個余計なので削除
            $query = trim($query, ',');
            $query .= "WHERE `uuid`='$this->uuid';";
        } else {
            // 同じくクエリ作成
            $keys = $values = '';
            foreach ($properties as $key => $value) {
                if($key === 'uuid') return false;
                $keys .= ",`$key`";
                $values .= ",'" . $this->escape($value) . "'";
            }
            $query = "INSERT INTO " . static::$table . " (`uuid`, $keys) VALUES ('$this->uuid', $values);";
        }
        //クエリ実行
        $stmt = $pdo->query($query);
        return boolval($stmt);
    }

    /**
     * クオーテーションのエスケープ
     * ソースはたったの一行
     * 
     * @param string $string
     * @return string
     */
    public function escape(string $string): string
    {
        return str_replace(['\'', '"'], ['\\\'', '\"'], $string);
    }
}
