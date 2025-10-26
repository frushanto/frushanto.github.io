# Compliance Notes

**Last updated:** 2026-01-19

## Legal Pages
This portfolio includes the following legally required pages:

### German (DE)
- `/de/impressum` - Impressum (Imprint)
- `/de/datenschutz` - Datenschutzerklärung (Privacy Policy)

### English (EN)
- `/imprint` - Imprint
- `/privacy` - Privacy Policy

## Data Protection & Privacy

### Current State
**No analytics or tracking is currently implemented:**
- No Google Analytics, Matomo, or similar tools
- No tracking cookies
- No third-party embeds (YouTube, social media widgets, etc.)
- No marketing pixels
- No cookie banner

The site is a static portfolio hosted on GitHub Pages with minimal data processing:
- GitHub Pages may log technical data (IP, timestamp, user agent) for hosting purposes
- No cookies are set by this website
- No user data is collected or stored

### Important: Future Changes

**⚠️ If analytics, tracking, or third-party embeds are added later:**
1. Implement proper GDPR-compliant consent handling
2. Add a cookie banner with opt-in/opt-out functionality
3. Update the privacy policy to reflect new data processing
4. Ensure tracking scripts only load after explicit user consent
5. Provide cookie/tracking opt-out mechanisms

**Examples of changes that would require consent:**
- Adding Google Analytics, Plausible, or similar
- Embedding YouTube videos, Google Maps, or social media feeds
- Adding marketing pixels (Meta/Facebook Pixel, LinkedIn Insight Tag, etc.)
- Using CDNs that set tracking cookies
- Implementing A/B testing tools
- Adding third-party comment systems

### Compliance Checklist for Future Changes
- [ ] Review and update privacy policy
- [ ] Implement cookie consent banner
- [ ] Configure tracking tools for consent-based loading
- [ ] Test opt-out functionality
- [ ] Update "Cookies / Tracking" section in legal pages
- [ ] Document data processing activities
- [ ] Review GDPR Art. 6(1)(a) requirements for consent

## Incomplete Information

The legal pages contain TODO placeholders for:
- **Address:** Street, house number, ZIP code, city (required for Impressum)
- **Phone:** Optional but recommended for contact information

**Action required:** Update these placeholders with actual information in:
- `/src/pages/de/impressum.astro`
- `/src/pages/de/datenschutz.astro`
- `/src/pages/imprint.astro`
- `/src/pages/privacy.astro`

## Maintenance

**Review schedule:**
- Check legal pages quarterly or when major site changes occur
- Update "Last updated" dates when privacy policy content changes
- Monitor GDPR/ePrivacy regulation updates

---

**Summary:** This site currently requires no consent handling due to the absence of analytics, tracking, or third-party data collection. Maintain this privacy-friendly approach or implement proper consent mechanisms before adding any tracking technology.
