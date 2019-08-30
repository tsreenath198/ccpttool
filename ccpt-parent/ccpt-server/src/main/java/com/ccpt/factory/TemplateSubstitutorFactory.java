package com.ccpt.factory;

import java.util.List;

import org.springframework.beans.factory.NoSuchBeanDefinitionException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ccpt.substitutor.ContentSubstitutor;

@Component
public class TemplateSubstitutorFactory {

	@Autowired
	List<ContentSubstitutor> substitutors;

	public ContentSubstitutor getSubstitutor(String type) {
		for (ContentSubstitutor contentSubstitutor : substitutors) {
			if (contentSubstitutor.getType().equals(type)) {
				return contentSubstitutor;
			}
		}
		throw new NoSuchBeanDefinitionException("No Substitutor Bean found for type : " + type);
	}
}