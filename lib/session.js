import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * BLUEBOT-X Session Manager
 * Developer: mudau_t
 * Modification: NOT ALLOWED
 */

class SessionManager {
  constructor(sessionId) {
    this.sessionId = sessionId;
    this.sessionPath = path.join(__dirname, '..', 'session');
    this.authPath = path.join(this.sessionPath, 'creds.json');
  }

  /**
   * Check if session exists
   */
  sessionExists() {
    if (!this.sessionId) return false;
    
    try {
      const sessionFile = path.join(this.sessionPath, 'creds.json');
      return fs.existsSync(sessionFile);
    } catch (error) {
      return false;
    }
  }

  /**
   * Create session directory
   */
  createSessionDir() {
    if (!fs.existsSync(this.sessionPath)) {
      fs.mkdirSync(this.sessionPath, { recursive: true });
    }
  }

  /**
   * Save session data
   */
  saveSession(data) {
    try {
      this.createSessionDir();
      const sessionFile = path.join(this.sessionPath, 'session.json');
      fs.writeFileSync(sessionFile, JSON.stringify(data, null, 2));
      return true;
    } catch (error) {
      console.error('Error saving session:', error);
      return false;
    }
  }

  /**
   * Load session data
   */
  loadSession() {
    try {
      const sessionFile = path.join(this.sessionPath, 'session.json');
      if (fs.existsSync(sessionFile)) {
        const data = fs.readFileSync(sessionFile, 'utf-8');
        return JSON.parse(data);
      }
      return null;
    } catch (error) {
      console.error('Error loading session:', error);
      return null;
    }
  }

  /**
   * Delete session
   */
  deleteSession() {
    try {
      if (fs.existsSync(this.sessionPath)) {
        fs.rmSync(this.sessionPath, { recursive: true, force: true });
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error deleting session:', error);
      return false;
    }
  }

  /**
   * Get session path for Baileys
   */
  getAuthPath() {
    this.createSessionDir();
    return this.sessionPath;
  }
}

export default SessionManager;
