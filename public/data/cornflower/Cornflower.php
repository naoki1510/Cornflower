<?php

namespace cornflower;

use \PDO;

/**
 * メイン
 */
class Cornflower {
    /** @var PDO */
    private static $pdo;

    public static function getPdo() : PDO{
        return self::$pdo;
    }

    /** @var Note[] 
     * Noteのキャッシュ
    */
    private $notes;

    /** 
     * @param PDO $pdo データベース接続用
     */
    public function __construct(PDO $pdo)
    {
        self::$pdo = $pdo;
        //var_dump($pdo->query('select * from users')->fetch(PDO::FETCH_ASSOC)); 
    }

    /**
     * @todo キャッシュを使う
     * 
     * @return Note
     */
    public static function getNote(string $uuid) : Note
    {
        return new Note($uuid);
    }
}