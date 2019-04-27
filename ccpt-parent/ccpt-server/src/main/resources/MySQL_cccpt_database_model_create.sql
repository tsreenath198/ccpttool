-- Table: client_application
CREATE TABLE client_application (
    id int NOT NULL,
    client_application_status_code varchar(3) NOT NULL,
    client_position_id int NOT NULL,
    consultant_id int NOT NULL,
    notes text,
    interview_date date NULL,
    active_flag char(1) NOT NULL DEFAULT 'Y',
    created_date date NOT NULL,
    updated_date date NULL,    
    CONSTRAINT client_application_pk PRIMARY KEY (id)
);

-- Table: client_application_status
CREATE TABLE client_application_status (
    code varchar(3) NOT NULL,
    description varchar(30) NOT NULL,
    active_flag char(1) NOT NULL DEFAULT 'Y',
    CONSTRAINT client_application_status_pk PRIMARY KEY (code)
);

-- Table: client_call_history
CREATE TABLE client_call_history (
    id int NOT NULL AUTO_INCREMENT,
    client_position_id int NOT NULL,
    notes text NOT NULL,
    created_date date NOT NULL ,
    updated_date date NULL,
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
    additional_comments text NOT NULL,
    created_date date NOT NULL ,
    updated_date date NULL,
    CONSTRAINT client_position_pk PRIMARY KEY (id)
);

-- Table: client_positions_status
CREATE TABLE client_positions_status (
    code varchar(3) NOT NULL,
    description varchar(30) NOT NULL,
    active_flag char(1) NOT NULL DEFAULT 'Y',
    CONSTRAINT client_positions_status_pk PRIMARY KEY (code)
);

-- Table: consultant
CREATE TABLE consultant (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    email varchar(50) NULL,
    phone varchar(20) NULL,
    skills text NULL,
    passout_year int NULL,
    qualification varchar(50) NULL,
    resume blob NULL,
    expected_salary double(10,2) NULL,
    description varchar(100) NULL,
    created_date date NOT NULL  ,
    updated_date date NULL,
    consultant_status_code varchar(3) NOT NULL,
    experience varchar(30) NULL,
    active_flag char(1) NOT NULL DEFAULT 'Y',
    CONSTRAINT consultant_pk PRIMARY KEY (id)
);

-- Table: consultant_call_history
CREATE TABLE consultant_call_history (
    id int NOT NULL AUTO_INCREMENT,
    consultant_id int NOT NULL,
    description varchar(20) NOT NULL,
    created_date date NOT NULL ,
    updated_date date NULL,
    CONSTRAINT consultant_call_history_pk PRIMARY KEY (id)
);

-- Table: consultant_status
CREATE TABLE consultant_status (
    code varchar(3) NOT NULL,
    description varchar(30) NOT NULL,
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
    created_date date NOT NULL ,
    updated_date date NULL,
    active_flag char(1) NOT NULL DEFAULT 'Y',
    CONSTRAINT login_pk PRIMARY KEY (username)
) COMMENT 'for login credentials';

-- Table: Recruiter
CREATE TABLE recruiter(
id INT NOT NULL AUTO_INCREMENT ,
firstname VARCHAR(30) NOT NULL , 
lastname VARCHAR(30) NOT NULL ,
dob DATE NOT NULL ,
phone VARCHAR(20) NOT NULL ,
email VARCHAR(30) NOT NULL ,
address TEXT NOT NULL, 
role VARCHAR(20) NOT NULL,
created_date date NOT NULL ,
updated_date date NULL,
active_flag char(1) NOT NULL DEFAULT 'Y',
CONSTRAINT recruter_pk PRIMARY KEY (id));

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

-- End of file.