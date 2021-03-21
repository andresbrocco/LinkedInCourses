<?php
$total = 10;
switch ( $total ) :
    case 1:
    case 2:
    case 3:
    case 4:
        echo '<p>$total is less than 5</p>';
        break;
    default: 
        echo '<p>$total is 5 or more</p>';
endswitch;

$turtle = 'Leo';
$bandana = '';
switch( $turtle ) {
    case 'Leo':
        $bandana = 'blue';
        break;
    case 'Raph':
        $bandana = 'red';
        break;
    case 'Mike':
        $bandana = 'orange';
        break;
    case 'Don':
        $bandana = 'purple';
        break;
}

echo "<p>$bandana</p>";