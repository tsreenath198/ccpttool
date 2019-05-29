package com.ccpt.util;

import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StrSubstitutor {
	private static final Pattern p = Pattern.compile("\\$\\{(.+?)\\}");

	public static String replace(String str, Map<String, String> map) {
		Matcher m = p.matcher(str);
		StringBuffer sb = new StringBuffer();
		while (m.find()) {
			String var = m.group(1);
			String replacement = map.get(var);
			m.appendReplacement(sb, replacement);
		}
		m.appendTail(sb);
		return sb.toString();
	}
}
