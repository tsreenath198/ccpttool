SET foreign_key_checks = 0;

DROP TABLE IF EXISTS client_application;
DROP TABLE IF EXISTS client_application_status;
DROP TABLE IF EXISTS client_call_history;
DROP TABLE IF EXISTS client_position;
DROP TABLE IF EXISTS client_positions_status;
DROP TABLE IF EXISTS consultant;
DROP TABLE IF EXISTS consultant_call_history;
DROP TABLE IF EXISTS consultant_status;
DROP TABLE IF EXISTS login;
DROP TABLE IF EXISTS upload_file;
DROP TABLE IF EXISTS recruiter;
DROP TABLE IF EXISTS client;
DROP TABLE IF EXISTS client_contact;

-- Table: client_application
CREATE TABLE client_application (
    id int NOT NULL AUTO_INCREMENT,
    client_application_status_code varchar(3) NOT NULL,
    client_position_id int NOT NULL,
    consultant_id int NOT NULL,
    notes text,
    interview_date datetime NULL,
    created_date datetime NOT NULL,
    updated_date datetime NOT NULL,  
    active_flag char(1) NOT NULL DEFAULT 'Y',
    CONSTRAINT client_application_pk PRIMARY KEY (id)
);

-- Table: client_application_status
CREATE TABLE client_application_status (
    code varchar(3) NOT NULL,
    description text NOT NULL,
    active_flag char(1) NOT NULL DEFAULT 'Y',
    CONSTRAINT client_application_status_pk PRIMARY KEY (code)
);

-- Table: client_call_history
CREATE TABLE client_call_history (
    id int NOT NULL AUTO_INCREMENT,
    client_position_id int NOT NULL,
    notes text NOT NULL,
    created_date datetime NOT NULL ,
    updated_date datetime NOT NULL,
    CONSTRAINT client_call_history_pk PRIMARY KEY (id)
);

-- Table: client_position
CREATE TABLE client_position (
    id int NOT NULL AUTO_INCREMENT,    
    technology text NOT NULL,
    experience varchar(30) NULL,
    required_skills text NOT NULL,
    min_ctc double(10,2) NULL,
    max_ctc double(10,2) NULL,
    client_positions_status_code varchar(3) NOT NULL,
    closed_by varchar(50) NULL,
    additional_comments text NULL,
    client_position_code varchar(30)  NOT NULL,
    created_date datetime NOT NULL ,
    updated_date datetime NOT NULL,
    active_flag char(1) NOT NULL DEFAULT 'Y',
    CONSTRAINT client_position_pk PRIMARY KEY (id)
);

-- Table: client_positions_status
CREATE TABLE client_positions_status (
    code varchar(3) NOT NULL,
    description text NOT NULL,
    active_flag char(1) NOT NULL DEFAULT 'Y',
    CONSTRAINT client_positions_status_pk PRIMARY KEY (code)
);

-- Table: consultant
CREATE TABLE consultant (
    id int NOT NULL AUTO_INCREMENT,
    fullname varchar(50) NOT NULL,
    gender varchar(15) NOT NULL,
    dob datetime NOT NULL ,
    email varchar(50) NULL,
    phone varchar(20) NULL,
    current_location varchar(30) NULL,
    skills text NULL,
    qualification varchar(50) NULL,
    passout_year int NULL,
    expected_ctc double(10,2) NULL,
    description text NULL,
    created_date datetime NOT NULL  ,
    updated_date datetime NOT NULL,
    consultant_status_code varchar(3) NOT NULL,
    experience_yrs int NULL,
    experience_months int  NULL,
    active_flag char(1) NOT NULL DEFAULT 'Y',
    CONSTRAINT consultant_pk PRIMARY KEY (id)
);

-- Table: consultant_call_history
CREATE TABLE consultant_call_history (
    id int NOT NULL AUTO_INCREMENT,
    consultant_id int NOT NULL,
    description text NOT NULL,
    created_date datetime NOT NULL ,
    updated_date datetime NOT NULL,
    CONSTRAINT consultant_call_history_pk PRIMARY KEY (id)
);

-- Table: consultant_status
CREATE TABLE consultant_status (
    code varchar(3) NOT NULL,
    description text) NOT NULL,
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
    created_date datetime NOT NULL ,
    updated_date datetime NOT NULL,
    active_flag char(1) NOT NULL DEFAULT 'Y',
    CONSTRAINT login_pk PRIMARY KEY (username)
);

-- Table: upload_file
CREATE TABLE upload_file (
  id int(11) NOT NULL AUTO_INCREMENT,
  file blob NOT NULL,
  ref_id int(11) NOT NULL,
  ref_type varchar(20) NOT NULL,
  comments text NOT NULL,
  CONSTRAINT upload_file_pk PRIMARY KEY (id)
);

-- Table: Recruiter
CREATE TABLE recruiter(
id INT NOT NULL AUTO_INCREMENT ,
fullname VARCHAR(50) NOT NULL , 
gender VARCHAR(15) NOT NULL ,
dob datetime NOT NULL ,
phone VARCHAR(20) NOT NULL ,
email VARCHAR(30) NOT NULL ,
address TEXT NOT NULL, 
role VARCHAR(20) NOT NULL,
created_date datetime NOT NULL ,
updated_date datetime NOT NULL,
active_flag char(1) NOT NULL DEFAULT 'Y',
CONSTRAINT recruter_pk PRIMARY KEY (id)
);

-- Table: Client
CREATE TABLE client(
client_id INT NOT NULL AUTO_INCREMENT , 
name VARCHAR(50) NOT NULL  , 
address TEXT NOT NULL , 
created_date datetime NOT NULL ,
updated_date datetime NOT NULL,
active_flag char(1) NOT NULL DEFAULT 'Y',
PRIMARY KEY (client_id));

-- Table: client_contact
CREATE TABLE client_contact( 
contact_id INT NOT NULL AUTO_INCREMENT ,
fullname VARCHAR(50) NOT NULL,
phone VARCHAR(20) NOT NULL , 
email VARCHAR(50) NOT NULL , 
client_id INT  NULL , 
created_date datetime NOT NULL ,
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
ALTER TABLE client_position ADD CONSTRAINT client_position_login FOREIGN KEY client_position_login (closed_by)
    REFERENCES login (username);

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
ALTER TABLE client_call_history ADD CONSTRAINT client_id_fk FOREIGN KEY (client_id) REFERENCES client(client_id) ON DELETE RESTRICT ON UPDATE RESTRICT;


ALTER TABLE client ADD created_date DATETIME NOT NULL AFTER address, ADD updated_date DATETIME NOT NULL AFTER created_date, ADD active_flag CHAR(1) NOT NULL DEFAULT 'Y' AFTER updated_date;
ALTER TABLE consultant ADD UNIQUE(fullname);
ALTER TABLE consultant ADD UNIQUE(email);
ALTER TABLE consultant ADD UNIQUE(phone);
ALTER TABLE consultant ADD current_company VARCHAR(50) NULL AFTER active_flag, ADD current_ctc DOUBLE NULL AFTER current_company, ADD preffered_location VARCHAR(50) NULL AFTER current_ctc;

-- End of file.

SET foreign_key_checks = 1;

