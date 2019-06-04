package com.ccpt.model;

import javax.persistence.Cacheable;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table
@Cacheable(true)
public class ClientApplicationStatus extends StatusEntity {

}
