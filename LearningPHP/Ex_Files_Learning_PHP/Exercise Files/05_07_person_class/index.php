<?php
class Person {
    var $name;
    var $age;
    var $birthday = false;

    function __construct( $name, $age ) {
        $this->name = $name;
        $this->age = $age;
    }

    public function get_name() {
        return $this->name;
    }

    public function  get_age() {
        return $this->age;
    }

    public function set_name( $new_name ) {
        $this->name = $new_name;
    }

    public function set_birthday( $b ) {
        $this->birthday = $b;
        $this->update_age();
    }

    private function update_age() {
        $this->age = ($this->birthday) ? ++$this->age : $this->age;
    }
}

$joe = new Person( 'Joe', 34 );
$rob = new Person( 'Rob', 29 );

echo '<p>' . $joe->get_name() . '</p>';
echo '<p>' . $rob->get_name() . '</p>';

$joe->set_birthday( true );
echo '<p>' . $joe->get_age() . '</p>';

// $rob->update_age(); // This will error out! 