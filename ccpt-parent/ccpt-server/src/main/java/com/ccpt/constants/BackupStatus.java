package com.ccpt.constants;

public class BackupStatus {
	private static final BackupStatus instance = new BackupStatus();
	private boolean isRunning = false;

	private BackupStatus() {
	}

	public static void startBackup() {
		instance.isRunning = true;
	}

	public static void finishBackup() {
		instance.isRunning = false;
	}

	public static boolean isRunning() {
		return instance.isRunning;
	}
}
