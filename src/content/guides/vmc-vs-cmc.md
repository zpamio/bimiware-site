---
title: 'VMC vs CMC: which BIMI certificate do you actually need?'
description: 'A practical decision guide to Verified Mark Certificates and Common Mark Certificates, from someone who has shipped the choice on 400+ BIMI projects. What each one unlocks, what it costs you, and how to decide in five minutes.'
publishDate: 2026-06-01
updatedDate: 2026-06-07
tags: ['BIMI', 'VMC', 'CMC', 'certificates']
---

If you are setting up BIMI and stuck on whether to buy a VMC or a CMC, here is the short answer before the detail: get a **VMC** if you own a registered trademark and you want the verified checkmark in Gmail or any logo display in Apple Mail. Get a **CMC** if you do not have a trademark, your logo has been public for at least a year, and Gmail and Yahoo are the inboxes you care about. If you only care about Yahoo, you need no certificate at all.

That covers most cases. The rest of this guide explains why, because the choice has real cost and time consequences and the wrong call wastes both.

## First, the part nobody can skip

Neither certificate does anything until your authentication is right. BIMI sits on top of DMARC, and the logo will not display unless your domain is at enforcement, meaning a DMARC policy of `p=quarantine` or `p=reject`. At `p=none` you can buy the most expensive certificate available and still see no logo. In 400+ logo projects, the single most common reason a "finished" BIMI setup shows nothing is a domain still sitting in DMARC monitoring mode. Sort that out first. The certificate question only matters once you are at enforcement with a valid [SVG Tiny PS](/services/bimi-svg-fix) logo.

## What each certificate actually is

A **Verified Mark Certificate (VMC)** proves your logo is a registered trademark. A certificate authority validates your mark against a trademark office before issuing. It is the older, stricter option, and it is the only one that unlocks the verified checkmark next to your name in Gmail. Apple Mail also requires a VMC to show a logo at all.

A **Common Mark Certificate (CMC)** was introduced by the BIMI working group and supported by Gmail from 2024. It removes the trademark requirement. Instead of a registered mark, you prove the logo has been publicly displayed on your domain for at least 12 months, verified through web archives. Gmail will show your logo with a CMC, but it will not show the verified checkmark. That checkmark stays exclusive to VMCs.

The practical effect: the CMC opened BIMI to a large group that was locked out before, including most startups and mid-market brands that never registered a trademark.

## How the inboxes differ

This is where the decision is really made, because support is not uniform.

| Inbox | No certificate | CMC | VMC |
| --- | --- | --- | --- |
| Yahoo | Logo displays | Logo displays | Logo displays |
| Gmail | No logo | Logo, no checkmark | Logo plus verified checkmark |
| Apple Mail | No logo | No logo | Logo displays |
| Microsoft | Limited support | Limited support | Limited support |

Yahoo is the permissive one and asks for no certificate. Gmail is where the certificate decision has teeth, because it accepts both but treats them differently. Apple Mail is strict and accepts only a VMC. Microsoft's BIMI support remains limited as of 2026, so do not plan around it.

## The decision, in order

Ask these in sequence and stop at the first match.

1. **Do you need to appear in Apple Mail with a logo?** If yes, you need a VMC. Apple does not accept a CMC. This decides it on its own.
2. **Do you want the Gmail verified checkmark?** If yes, and you have a registered trademark, get a VMC. The checkmark is a VMC-only feature.
3. **No trademark, but you want a logo in Gmail?** Get a CMC, provided your logo has been public on your domain for at least 12 months. This is the path that did not exist before 2024.
4. **You only care about Yahoo?** Buy nothing. Publish a compliant SVG and a BIMI record and you are done.

The cost difference follows the same line. A VMC carries the trademark requirement and a higher annual price; a CMC is the cheaper, faster option because it skips trademark validation. Both are annual subscriptions you renew, and both are issued by the same certificate authorities, such as DigiCert, Entrust and Sectigo.

## The mistake I see most often

Brands buy a VMC because it sounds more official, without checking whether they have a registered trademark in hand. The trademark is the gate. If you do not already hold one, a VMC means starting a trademark registration first, which takes months and real legal cost. In almost every one of those cases, a CMC would have put the logo in Gmail within days, with the checkmark being the only thing given up. Unless the checkmark or Apple Mail is a hard requirement, that is rarely worth a multi-month detour.

## Frequently asked

**Can I start with a CMC and move to a VMC later?** Yes. Many brands display a logo via CMC now, then upgrade to a VMC once a trademark registers, to pick up the checkmark and Apple Mail. The BIMI record and SVG stay the same; only the certificate changes.

**Does the certificate replace DMARC?** No. The certificate is layered on top of DMARC at enforcement. Both are required for the providers that ask for a certificate.

**Will the logo show instantly once I add the certificate?** No. Inbox providers cache BIMI results, so allow a few hours to a few days after publishing.

## Sources

- [BIMI Group: Common Mark Certificates announcement](https://bimigroup.org/announcing-common-mark-certificates/)
- [DigiCert: VMC and CMC setup guide](https://www.digicert.com/blog/bimi-setup-guide-for-vmc-and-cmc)

If you would rather not work through the certificate decision and the authentication behind it yourself, that is exactly what [the full BIMI implementation service](/services/bimi-implementation) handles, decision included.
