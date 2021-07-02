CREATE DATABASE intersec;
USE intersec;
CREATE TABLE track_run_id (id int NOT NULL, rec_no int, PRIMARY KEY (id));
CREATE TABLE upload_files (id int NOT NULL, vendor varchar(100), file_upld varchar(500), mcafee text, avast text, avg text, bitdefender text, kaspersky text, final_res text, PRIMARY KEY (id));
CREATE TABLE vendor (id int NOT NULL, v_mail varchar(100), bucket_name text, v_access_key_id text, v_secret_key text, PRIMARY KEY (id));