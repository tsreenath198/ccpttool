SET foreign_key_checks = 0;
DROP TABLE IF EXISTS client_application;
DROP TABLE IF EXISTS client_application_status;
DROP TABLE IF EXISTS client_call_history;
DROP TABLE IF EXISTS client_position;
DROP TABLE IF EXISTS client_position_status;
DROP TABLE IF EXISTS consultant;
DROP TABLE IF EXISTS consultant_call_history;
DROP TABLE IF EXISTS consultant_status;
DROP TABLE IF EXISTS login;
DROP TABLE IF EXISTS upload_file;
DROP TABLE IF EXISTS recruiter;
DROP TABLE IF EXISTS client;
DROP TABLE IF EXISTS client_contact;

DROP TABLE IF EXISTS email_template;
DROP TABLE IF EXISTS email_content;
DROP TABLE IF EXISTS other_contact;
DROP TABLE IF EXISTS sms_template;
DROP TABLE IF EXISTS sms;

-- Table: client_application
CREATE TABLE client_application (
    id int NOT NULL AUTO_INCREMENT,
    client_application_status_code varchar(3) NOT NULL,
    client_position_id int NOT NULL,
    consultant_id int NOT NULL,
    notes text,
    interview_date datetime,
    created_date datetime NOT NULL,
    updated_date datetime NOT NULL,  
    active_flag char(1) NOT NULL DEFAULT 'Y',
    CONSTRAINT client_application_pk PRIMARY KEY (id)
);

-- Table: client_application_status
CREATE TABLE client_application_status (
    code varchar(20) NOT NULL,
    description text NOT NULL,
    active_flag char(1) NOT NULL DEFAULT 'Y',
    CONSTRAINT client_application_status_pk PRIMARY KEY (code)
);

-- Table: client_call_history
CREATE TABLE client_call_history (
    id int NOT NULL AUTO_INCREMENT,
    client_position_id int NOT NULL,
    notes text NOT NULL,
    created_date datetime NOT NULL,
    updated_date datetime NOT NULL,
    CONSTRAINT client_call_history_pk PRIMARY KEY (id)
);

-- Table: client_position
CREATE TABLE client_position (
    id int NOT NULL AUTO_INCREMENT,    
    technology text NOT NULL,
    experience varchar(30),
    required_skills text NOT NULL,
    min_ctc double(10,2),
    max_ctc double(10,2) NULL,
    client_positions_status_code varchar(3) NOT NULL,
    closed_by INT,
    additional_comments text,
    client_position_code varchar(30)  NOT NULL,
    created_date datetime NOT NULL,
    updated_date datetime NOT NULL,
    active_flag char(1) NOT NULL DEFAULT 'Y',
    CONSTRAINT client_position_pk PRIMARY KEY (id)
);

-- Table: client_positions_status
CREATE TABLE client_positions_status (
    code varchar(30) NOT NULL,
    description text NOT NULL,
    active_flag char(1) NOT NULL DEFAULT 'Y',
    CONSTRAINT client_positions_status_pk PRIMARY KEY (code)
);

-- Table: consultant
CREATE TABLE consultant (
    id int NOT NULL AUTO_INCREMENT,
    fullname varchar(50) NOT NULL,
    gender varchar(15) NOT NULL,
    dob datetime,
    email varchar(50),
    phone varchar(20),
    current_location varchar(30),
    skills text,
    qualification varchar(50),
    passout_year int,
    expected_ctc double(10,2),
    description text,
    created_date datetime NOT NULL ,
    updated_date datetime NOT NULL,
    consultant_status_code varchar(3) NOT NULL,
    experience_yrs int,
    experience_months int ,
    active_flag char(1) NOT NULL DEFAULT 'Y',
    CONSTRAINT consultant_pk PRIMARY KEY (id)
);

-- Table: consultant_call_history
CREATE TABLE consultant_call_history (
    id int NOT NULL AUTO_INCREMENT,
    consultant_id int NOT NULL,
    description text NOT NULL,
    created_date datetime NOT NULL,
    updated_date datetime NOT NULL,
    CONSTRAINT consultant_call_history_pk PRIMARY KEY (id)
);

-- Table: consultant_status
CREATE TABLE consultant_status (
    code varchar(3) NOT NULL,
    description text NOT NULL,
    active_flag char(1) NOT NULL DEFAULT 'Y',
    CONSTRAINT consultant_status_pk PRIMARY KEY (code)
);

-- Table: login
CREATE TABLE login (
    username varchar(50) NOT NULL,
    password varchar(50) NOT NULL,
    token varchar(50) NOT NULL,
    role varchar(20) NOT NULL,
    description text NULL,
    created_date datetime NOT NULL,
    updated_date datetime NOT NULL,
    active_flag char(1) NOT NULL DEFAULT 'Y',
    CONSTRAINT login_pk PRIMARY KEY (username)
);

-- Table: upload_file
CREATE TABLE upload_file (
  id int(11) NOT NULL AUTO_INCREMENT,
  content longblob NOT NULL,
  ref_id int(11) NOT NULL,
  ref_type varchar(20) NOT NULL,
  comments text NOT NULL,
  CONSTRAINT upload_file_pk PRIMARY KEY (id)
);

-- Table: Recruiter
CREATE TABLE recruiter(
	id INT NOT NULL AUTO_INCREMENT,
	fullname VARCHAR(50) NOT NULL, 
	gender VARCHAR(15) NOT NULL,
	dob datetime NOT NULL,
	phone VARCHAR(20) NOT NULL,
	email VARCHAR(60) NOT NULL,
	address TEXT NOT NULL, 
	role VARCHAR(20) NOT NULL,
	created_date datetime NOT NULL,
	updated_date datetime NOT NULL,
	active_flag char(1) NOT NULL DEFAULT 'Y',
	CONSTRAINT recruter_pk PRIMARY KEY (id)
);

-- Table: Client
CREATE TABLE client(
client_id INT NOT NULL AUTO_INCREMENT, 
name VARCHAR(50) NOT NULL , 
address TEXT NOT NULL, 
created_date datetime NOT NULL,
updated_date datetime NOT NULL,
active_flag char(1) NOT NULL DEFAULT 'Y',
PRIMARY KEY (client_id));

-- Table: client_contact
CREATE TABLE client_contact( 
	contact_id INT NOT NULL AUTO_INCREMENT,
	fullname VARCHAR(50) NOT NULL,
	phone VARCHAR(20) NOT NULL, 
	email VARCHAR(50) NOT NULL, 
	client_id INT  NULL, 
	created_date datetime NOT NULL,
	updated_date datetime NOT NULL,
	active_flag char(1) NOT NULL DEFAULT 'Y',
	PRIMARY KEY (contact_id));

ALTER TABLE client_contact ADD INDEX(client_id);

ALTER TABLE client_contact ADD CONSTRAINT client_id_fk FOREIGN KEY (client_id) REFERENCES client(client_id) ON DELETE RESTRICT ON UPDATE RESTRICT;


-- foreign keys
-- Reference: client_application_client_application_status (table: client_application)
ALTER TABLE client_application ADD CONSTRAINT client_application_client_application_status FOREIGN KEY client_application_client_application_status (client_application_status_code)
    REFERENCES client_application_status (code);

-- Reference: client_application_client_position (table: client_application)
ALTER TABLE client_application ADD CONSTRAINT client_application_client_position FOREIGN KEY client_application_client_position (client_position_id)
    REFERENCES client_position (id);

-- Reference: client_application_consultant (table: client_application)
ALTER TABLE client_application ADD CONSTRAINT client_application_consultant FOREIGN KEY client_application_consultant (consultant_id)
    REFERENCES consultant (id);

-- Reference: client_call_history_client_position (table: client_call_history)
ALTER TABLE client_call_history ADD CONSTRAINT client_call_history_client_position FOREIGN KEY client_call_history_client_position (client_position_id)
    REFERENCES client_position (id);

-- Reference: client_position_client_positions_status (table: client_position)
ALTER TABLE client_position ADD CONSTRAINT client_position_client_positions_status FOREIGN KEY client_position_client_positions_status (client_positions_status_code)
    REFERENCES client_positions_status (code);

-- Reference: client_position_login (table: client_position)
-- ALTER TABLE client_position ADD CONSTRAINT client_position_login FOREIGN KEY client_position_login (closed_by)
  --  REFERENCES login (username);

-- Reference: consultant_call_history_consultant (table: consultant_call_history)
ALTER TABLE consultant_call_history ADD CONSTRAINT consultant_call_history_consultant FOREIGN KEY consultant_call_history_consultant (consultant_id)
    REFERENCES consultant (id);

-- Reference: consultant_consultant_status (table: consultant)
ALTER TABLE consultant ADD CONSTRAINT consultant_consultant_status FOREIGN KEY consultant_consultant_status (consultant_status_code)
    REFERENCES consultant_status (code);

    ALTER TABLE recruiter ADD status VARCHAR(30) NOT NULL AFTER updated_date;
    
    ALTER TABLE client_position ADD client_id INT NOT NULL ;
ALTER TABLE client_position ADD INDEX(client_id);
ALTER TABLE client_position ADD CONSTRAINT client_position_client_id_fk FOREIGN KEY (client_id) REFERENCES client(client_id) ON DELETE RESTRICT ON UPDATE RESTRICT;
  
ALTER TABLE client_call_history ADD client_id INT(11) NOT NULL AFTER updated_date;
ALTER TABLE client_call_history ADD INDEX(client_id);
ALTER TABLE client_call_history ADD CONSTRAINT client_call_history_client_id_fk FOREIGN KEY (client_id) REFERENCES client(client_id) ON DELETE RESTRICT ON UPDATE RESTRICT;


ALTER TABLE consultant ADD UNIQUE(fullname);
ALTER TABLE consultant ADD UNIQUE(email);
ALTER TABLE consultant ADD UNIQUE(phone);
ALTER TABLE consultant ADD current_company VARCHAR(50) NULL AFTER active_flag, ADD current_ctc DOUBLE NULL AFTER current_company, ADD preffered_location VARCHAR(50) NULL AFTER current_ctc;


ALTER TABLE consultant_call_history ADD client_position_code VARCHAR(30) NOT NULL AFTER updated_date, ADD called_date DATETIME NOT NULL AFTER client_position_code;
ALTER TABLE consultant_call_history ADD INDEX(client_position_code);
ALTER TABLE client_position ADD INDEX(client_position_code);
ALTER TABLE consultant_call_history ADD CONSTRAINT client_position_code_fk FOREIGN KEY (client_position_code) REFERENCES client_position(client_position_code) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE client_call_history ADD active_flag CHAR(1) NOT NULL DEFAULT 'Y' AFTER client_id;
ALTER TABLE client_call_history ADD called_date DATETIME NOT NULL AFTER active_flag, ADD client_position_code VARCHAR(30) NOT NULL AFTER called_date;
ALTER TABLE client_call_history ADD INDEX(client_position_code);
ALTER TABLE client_call_history ADD CONSTRAINT client_position_code_fk_ch FOREIGN KEY (client_position_code) REFERENCES client_position(client_position_code) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE consultant_call_history ADD active_flag CHAR(1) NOT NULL DEFAULT 'Y' AFTER called_date;
CREATE TABLE other_contact ( id INT(11) NOT NULL AUTO_INCREMENT, name VARCHAR(30) NOT NULL, phone VARCHAR(30) NOT NULL, email VARCHAR(50) NOT NULL, notes TEXT NOT NULL, created_date DATETIME NOT NULL, updated_date DATETIME NOT NULL, active_flag CHAR(1) NOT NULL DEFAULT 'Y', PRIMARY KEY (id)) ;
ALTER TABLE client_position ADD job_code VARCHAR(30) NOT NULL, ADD location VARCHAR(50) NOT NULL, ADD no_of_positions INT NOT NULL;

ALTER TABLE client_call_history DROP FOREIGN KEY client_call_history_client_position;
ALTER TABLE client_call_history DROP client_position_id;
ALTER TABLE client_position ADD INDEX(closed_by);
ALTER TABLE client_position ADD CONSTRAINT recruiter_fk FOREIGN KEY (closed_by) REFERENCES recruiter(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE client_position CHANGE technology role TEXT CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL;

ALTER TABLE client_application ADD closed_by INT NOT NULL AFTER active_flag;
ALTER TABLE client_application ADD INDEX(closed_by);
ALTER TABLE client_application ADD CONSTRAINT closed_by_fk FOREIGN KEY (closed_by) REFERENCES recruiter(id) ON DELETE RESTRICT ON UPDATE RESTRICT;
CREATE TABLE email_template ( id INT NULL AUTO_INCREMENT, type VARCHAR(100) NOT NULL, subject TEXT NOT NULL, body TEXT NOT NULL, PRIMARY KEY (id), UNIQUE (type));
ALTER TABLE client  ADD phone VARCHAR(20) NOT NULL  AFTER address,  ADD email VARCHAR(100) NOT NULL  AFTER phone,  ADD industry VARCHAR(100) NOT NULL  AFTER email,  ADD guarantee_period INT NOT NULL  AFTER industry,  ADD credit_period INT NOT NULL  AFTER guarantee_period,  ADD billing_address TEXT NOT NULL  AFTER credit_period,  ADD gst VARCHAR(100) NULL DEFAULT NULL  AFTER billing_address,  ADD servicetax_no VARCHAR(100) NOT NULL  AFTER gst,  ADD service_charge DOUBLE NOT NULL  AFTER servicetax_no;
ALTER TABLE consultant  ADD current_job_title VARCHAR(100) NULL  AFTER preffered_location,  ADD current_functional_area VARCHAR(100) NULL  AFTER current_job_title,  ADD current_industry VARCHAR(100) NULL  AFTER current_functional_area,  ADD years_incurrent_job INT NULL  AFTER current_industry,  ADD months_incurrent_job INT NULL  AFTER years_incurrent_job,  ADD notice_period INT NULL  AFTER months_incurrent_job,  ADD highest_education VARCHAR(100) NOT NULL  AFTER notice_period;

CREATE TABLE sms_template ( id INT NOT NULL AUTO_INCREMENT, type VARCHAR(100) NOT NULL, body TEXT NOT NULL, PRIMARY KEY (id));
ALTER TABLE client_application ADD 	interview_time VARCHAR(30)  NULL, ADD interview_location VARCHAR(30)  NULL;

-- End of file.

SET foreign_key_checks = 1;
