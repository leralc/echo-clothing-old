# Echo's Mod - Pinned @ V1 Body

This repository serves an **old** version of Echo's mod, before the V2 body update, for those who prefer the V1 body.

> [!WARNING]
> **This repository is provided as-is without any ongoing support or maintenance**. As the V1 body is no longer supported by the mod author, it is only a matter of time until it falls out of date and becomes incompatible (with new additions/changes to the mod, or the game itself).
> 
> **Use at your own risk, and understand that you will inevitably need to switch back to the main mod at some point in the future (things *will* start breaking).**

## Usage

As this is a fork of the main mod, it is *not* present in FUSAM, and you will need to either use the UserScript loader, or the bookmarklet instead.

> [!IMPORTANT]
>
> **Ensure that you do not have the original mod loaded at the same time, as they will conflict.** Specifically, you will need to disable the *clothing* part of the mod (you may use the *activity* part).

### UserScript

1. Install a UserScript manager (such as [Tampermonkey](https://www.tampermonkey.net/) or [ViolentMonkey](https://violentmonkey.github.io/)).
    - If you are on Chrome, you will need to [enable developer mode](https://www.tampermonkey.net/faq.php#Q209) for TamperMonkey to work properly.
2. Install the UserScript by clicking [here](https://leralc.github.io/echo-v1-body/BC_Cloth2.user.js).

### Bookmarklet

1. Create a new bookmark in your browser with the following URL:
    ```javascript
    javascript:(function() { const n = document.createElement('script'); n.setAttribute('type', 'text/javascript'); n.setAttribute('src', 'https://leralc.github.io/echo-v1-body/BC_Cloth2.user.js? t=' + Date.now()); n.onload = function() { n.remove(); }; document.head.appendChild(n); })();
    ```
2. Click the bookmark whenever you want to load the mod.
