<?php
namespace Letscodehu;

class Update {

    public static function preUpdate() {
        echo 'You shall not pass!'.PHP_EOL;
        exit;
    }

}