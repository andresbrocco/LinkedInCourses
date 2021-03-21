<?php require_once 'inc/header.php'; 

	echo '<h4><code>file_put_content()</code></h4>';
	$text = file( 'treasure-island.txt' );
	echo file_put_contents( 'ti-copy.txt', $text );
	echo '<hr/>';

	echo '<h4>Read/Write Files</h4>';
	$list = file( 'mailing-list.txt' );
	$fhandle = fopen( 'sub-list.txt', 'a' );
	foreach( $list as $entry ) {
		if( strpos( $entry, 'casabona.org' ) ) {
			fwrite( $fhandle, $entry );
		}
	}
	fclose($fhandle);

	require_once 'inc/footer.php';
