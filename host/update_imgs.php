<?php
$HomeServAddress ="http://protosparky.duckdns.org:8080/host";
$HomeServAddr_csv ="/file_loc.csv";
//Check for csv file

$HomeServCsvArr  = array_map('str_getcsv', file($HomeServAddress.$HomeServAddr_csv));
$HomeServCsvArr_size= count($HomeServCsvArr); 

print("<h1>File sync</h1>");

//Run trough csv and check file paths
for($csv_pointer = 1; $csv_pointer <=  $HomeServCsvArr_size - 1; $csv_pointer++){
    $Current_csv_file_loc = $HomeServCsvArr[$csv_pointer][0];
    $Current_csv_file_loc_path = ".".$HomeServCsvArr[$csv_pointer][0];  //adds one dot to file path in csv file. makes valid file path
    $Current_csv_action = $HomeServCsvArr[$csv_pointer][1];             //Specifies what operation to do. Delete or download? 

    if($Current_csv_action == 0){
        //DELETE FILES
        if(file_exists($Current_csv_file_loc_path)){
            //Delete
            unlink($Current_csv_file_loc_path);
            print($Current_csv_file_loc_path." Deleted <br>");
            header("Refresh:1");
        }
        else{
            print($Current_csv_file_loc_path." Does not exist <br>");
        }
    }
    elseif($Current_csv_action == 1){
        //Download files

        if(!file_exists($Current_csv_file_loc_path)){
            //Download
            copy($HomeServAddress.$Current_csv_file_loc, $Current_csv_file_loc_path);
            print($Current_csv_file_loc_path." Downloaded <br>");
            header("Refresh:1");
            
        }
        else{
            print($Current_csv_file_loc_path." Exists on server <br>");
        }

    }
}

?>  