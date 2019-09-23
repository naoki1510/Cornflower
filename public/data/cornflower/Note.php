<?php

namespace cornflower;

class Note extends Contents
{
    public const PROPERTY_NAME = 'name';
    public const PROPERTY_DESCRIPTION = 'description';
    public const PROPERTY_OWNER = 'owner';
    public const PROPERTY_DATE = 'date';
    public const PROPERTY_URL = 'url';
    public const PROPERTY_KEYWORDS = 'keywords';

    protected static $table = 'notes';

}
