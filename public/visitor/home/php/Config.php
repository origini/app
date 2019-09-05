<?php


class Config
{
    public $plugins = [];

    public function add($plugin){
        $this->plugins[] = $plugin;
    }

    public static function init(array $plugins){
        foreach ($plugins as $plugin ){

        }
    }
}
