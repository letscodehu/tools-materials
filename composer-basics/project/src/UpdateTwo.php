<?php
namespace Letscodehu;

class UpdateTwo {

    public static function preUpdate() {
        echo 'You shall not pass!'.PHP_EOL;
        exit;
    }

}