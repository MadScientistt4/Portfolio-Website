import React from "react";
import Icon from "../ui/Icon.jsx";
import CursorEffectToggle from "../ui/CursorEffectToggle.jsx";

/**
 * Each footer link gets its own fixed accent color (not the deterministic
 * per-skill hash used elsewhere) so GitHub/LinkedIn/LeetCode/etc. read as
 * distinct, colorful buttons rather than one uniform grey row.
 */
function footerLinks(profile) {
  return [
    { key: "linkedin", href: profile.social.linkedin, external: true, icon: "linkedin", label: "LinkedIn", color: "#7FC4E8" },
    { key: "github", href: profile.social.github, external: true, icon: "github", label: "GitHub", color: "#B79CED" },
    { key: "leetcode", href: profile.social.leetcode, external: true, icon: "leetcode", label: "LeetCode", color: "#FFA116" },
    { key: "codechef", href: profile.social.codechef, external: true, icon: "codechef", label: "CodeChef", color: "#D89D5D" },
    { key: "codeforces", href: profile.social.codeforces, external: true, icon: "codeforces", label: "CodeForces", color: "#3FA34D" },
  ];
}

export default function Footer({ profile, cursorEffect, setCursorEffect }) {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <span>
        built by {profile.name} &middot; {year}{" "}
        <CursorEffectToggle cursorEffect={cursorEffect} setCursorEffect={setCursorEffect} />
      </span>
      <div className="footer__links">
        {footerLinks(profile).map((link) => (
          <a
            key={link.key}
            href={link.href}
            {...(link.external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
            className="footer__link"
            style={{ "--link-color": link.color }}
          >
            <Icon name={link.icon} /> <span>{link.label}</span>
          </a>
        ))}
      </div>
    </footer>
  );
}
