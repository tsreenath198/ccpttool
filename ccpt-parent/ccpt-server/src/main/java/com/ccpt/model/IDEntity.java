package com.ccpt.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MappedSuperclass;
import javax.persistence.OneToMany;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@MappedSuperclass
public class IDEntity extends BaseEntity<Integer> {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	protected Integer id;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "refId")
	protected transient List<AdditionalProperty> properties;

	public Integer getId() {
		return (id == null || id == 0) ? null : id;
	}

	@Override
	public Integer getKey() {
		return getId();
	}
}
