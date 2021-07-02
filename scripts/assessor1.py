import requests
import subprocess
import re
import mysql.connector
import boto3

mydb = mysql.connector.connect(
  host="localhost",
  user="mysql_username",
  password="mysql_password",
  database="intersec"
)

mycursor = mydb.cursor()

mycursor.execute("SELECT MAX(id) FROM upload_files")
file_id = mycursor.fetchall()
for x in file_id:
	file_id1 = x[0]

mycursor.execute("SELECT MAX(id) FROM track_run_id")
rec_id = mycursor.fetchall()
for y in rec_id:
	rec_id1 = y[0]

sql_rec = "SELECT rec_no FROM track_run_id WHERE id = %s"
val_rec = (rec_id1,)
mycursor.execute(sql_rec, val_rec)
rec_response = mycursor.fetchall()
for z in rec_response:
	rec_id2 = z[0]

if rec_id2 != file_id1:
	sql1 = "INSERT INTO track_run_id (rec_no) VALUES (%s)"
	val1 = (file_id1,)
	mycursor.execute(sql1, val1)
	mydb.commit()
	mycursor.execute("SELECT MAX(id) FROM track_run_id")
	rec_id = mycursor.fetchall()
	for y in rec_id:
		rec_id1 = y[0]

	sql_rec = "SELECT rec_no FROM track_run_id WHERE id = %s"
	val_rec = (rec_id1,)
	mycursor.execute(sql_rec, val_rec)
	rec_response = mycursor.fetchall()
	for z in rec_response:
		rec_id2 = z[0]

	sql = "SELECT file_upld FROM upload_files WHERE id = %s"
	file_id2 = (rec_id2,)
	mycursor.execute(sql, file_id2)
	response1 = mycursor.fetchall()
	#print(response1)
	for y in response1:
		file_path = y[0]

	#print(file_path)

	cmd1 = "curl --request POST --url 'https://www.virustotal.com/vtapi/v2/file/scan' --form 'apikey=your_virustotal_apikey' --form 'file=@"
	file_path2 = file_path + "'"
	#print(file_path2)
	cmd_full = cmd1 + file_path2
	#print(cmd_full)
	response = subprocess.getoutput(cmd_full)
	print(response)
	pattern = "file\/(.*?)\/"
	substring = re.search(pattern, response).group(1)
	print(substring)
	params = {'apikey': 'your_virustotal_apikey', 'resource': substring}
	headers = {
	"Accept-Encoding": "gzip, deflate",
	"User-Agent": "http://localhost"
	}
	response = requests.get('https://www.virustotal.com/vtapi/v2/file/report', params = params, headers = headers)
	json_response = response.json()

	"""
	md5 = json_response["md5"]
	sha256 = json_response["sha256"]
	sha1 = json_response["sha1"]
	"""

	try:
		scan_date = json_response["scan_date"]
	except KeyError:
		positives = json_response["positives"]
	finally:
		total = json_response["total"]

	"""
	### MD5: {md5}
	### SHA256: {sha256}
	### SHA1: {sha1}
	md5 = md5, sha256 = sha256, sha1 = sha1
	"""
	md = """
	#Scan Results

	""".format()

	scanners = json_response["scans"].keys()
	md += """
	| Scanner           | Detected              | Cool  |
	|-------------------|:----------------------|:------|
	"""
	for scanner in scanners:
		detected = json_response["scans"][scanner]["detected"]
		result = json_response["scans"][scanner]["result"]
		md += """|{scanner}|  {detected}|  {result}|\n""".format(scanner = scanner, detected = detected, result = result)

	with open("Results.md", "w") as fileObject:
		fileObject.write(md)
		fileObject.close()

	pattern2 = "McAfee\|  (.*?)\|"
	pattern3 = "Avast\|  (.*?)\|"
	pattern4 = "AVG\|  (.*?)\|"
	pattern5 = "BitDefender\|  (.*?)\|"
	pattern6 = "Kaspersky\|  (.*?)\|"
	pattern7 = "CAT-QuickHeal\|  (.*?)\|"
	pattern8 = "Bkav\|  (.*?)\|"
	pattern9 = "Zillya\|  (.*?)\|"
	pattern10 = "McAfee-GW-Edition\|  (.*?)\|"
	pattern11 = "BitDefenderTheta\|  (.*?)\|"

	o = open('Results.md','r')
	for i in o:
		string1 = str(i)
		try:
			substring_mcafee = re.search(pattern2, string1)
			substring_mc1 = str(substring_mcafee)
			if substring_mc1 != "None":
				print(substring_mc1)
				mcafee = re.search(pattern2, substring_mc1).group(1)
				print(mcafee)
			mcafee
		except NameError:
			substring_mcafee = re.search(pattern7, string1)
			substring_mc1 = str(substring_mcafee)
			if substring_mc1 != "None":
				print(substring_mc1)
				mcafee = re.search(pattern7, substring_mc1).group(1)
				print(mcafee)

		try:
			substring_avast = re.search(pattern3, string1)
			substring_av1 = str(substring_avast)
			if substring_av1 != "None":
				print(substring_av1)
				avast = re.search(pattern3, substring_av1).group(1)
				print(avast)
			avast
		except NameError:
			substring_avast = re.search(pattern8, string1)
			substring_av1 = str(substring_avast)
			if substring_av1 != "None":
				print(substring_av1)
				avast = re.search(pattern8, substring_av1).group(1)
				print(avast)

		try:
			substring_avg = re.search(pattern4, string1)
			substring_avg1 = str(substring_avg)
			if substring_avg1 != "None":
				print(substring_avg1)
				avg = re.search(pattern4, substring_avg1).group(1)
				print(avg)
			avg
		except NameError:
			substring_avg = re.search(pattern9, string1)
			substring_avg1 = str(substring_avg)
			if substring_avg1 != "None":
				print(substring_avg1)
				avg = re.search(pattern9, substring_avg1).group(1)
				print(avg)

		try:
			substring_bit = re.search(pattern5, string1)
			substring_bit1 = str(substring_bit)
			if substring_bit1 != "None":
				print(substring_bit1)
				bitdefender = re.search(pattern5, substring_bit1).group(1)
				print(bitdefender)
			bitdefender
		except NameError:
			substring_bit = re.search(pattern10, string1)
			substring_bit1 = str(substring_bit)
			if substring_bit1 != "None":
				print(substring_bit1)
				bitdefender = re.search(pattern10, substring_bit1).group(1)
				print(bitdefender)

		try:
			substring_kas = re.search(pattern6, string1)
			substring_kas1 = str(substring_kas)
			if substring_kas1 != "None":
				print(substring_kas1)
				kaspersky = re.search(pattern6, substring_kas1).group(1)
				print(kaspersky)
			kaspersky
		except NameError:
			substring_kas = re.search(pattern11, string1)
			substring_kas1 = str(substring_kas)
			if substring_kas1 != "None":
				print(substring_kas1)
				kaspersky = re.search(pattern11, substring_kas1).group(1)
				print(kaspersky)
	o.close()

	sql1 = "UPDATE upload_files SET mcafee = %s, avast = %s, avg = %s, bitdefender = %s, kaspersky = %s WHERE id = %s"
	val = (mcafee, avast, avg, bitdefender, kaspersky, rec_id2)
	mycursor.execute(sql1, val)
	mydb.commit()

	count = 0
	if mcafee == "True":
		count += 1
	if avast == "True":
		count += 1
	if avg == "True":
		count += 1
	if bitdefender == "True":
		count += 1
	if kaspersky == "True":
		count += 1

	if count == 0:
		final_res = "Safe"
	elif count == 1:
		final_res = "Suspicious"
	elif count > 1:
		final_res = "Malicious"

	sql2 = "UPDATE upload_files SET final_res = %s WHERE id = %s"
	val2 = (final_res, rec_id2)
	mycursor.execute(sql2, val2)
	mydb.commit()

	if final_res == "Safe":
		sql3 = "SELECT vendor FROM upload_files WHERE id = %s"
		val3 = (rec_id2,)
		mycursor.execute(sql3, val3)
		resp_upload = mycursor.fetchall()
		for u in resp_upload:
			vendor = u[0]
		print(vendor)
		sql4 = "SELECT v_access_key_id FROM vendor WHERE v_mail = %s"
		val4 = (vendor,)
		mycursor.execute(sql4, val4)
		resp_upload1 = mycursor.fetchall()
		for v in resp_upload1:
			ACCESS_KEY = v[0]
		print(ACCESS_KEY)
		sql5 = "SELECT v_secret_key FROM vendor WHERE v_mail = %s"
		mycursor.execute(sql5, val4)
		resp_upload2 = mycursor.fetchall()
		for w in resp_upload2:
			SECRET_KEY = w[0]
		print(SECRET_KEY)
		sql6 = "SELECT bucket_name FROM vendor WHERE v_mail = %s"
		mycursor.execute(sql6, val4)
		resp_upload3 = mycursor.fetchall()
		for t in resp_upload3:
			bucket_name = t[0]
		print(bucket_name)
		sub_file_path = file_path.split("uploaded_files/",1)[1]
		print(sub_file_path)
		s3 = boto3.client('s3', aws_access_key_id=ACCESS_KEY, aws_secret_access_key=SECRET_KEY)
		s3.upload_file(file_path, bucket_name, sub_file_path)
		print("Upload Successful")
	else:
		print("File was found to be unsuitable for upload")
