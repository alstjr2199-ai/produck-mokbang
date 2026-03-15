# Produck-Mokbang Blueprint

## Project Overview
A web application featuring fun interactions and "Mokbang" (eating show) related content, currently focused on a playful theme.

## Current Features & Design
- **Title:** "이서연바보" (Lee Seoyeon Babo)
- **Interactive Elements:** 
  - A "<개추>" button with a 1/5 failure chance.
  - A Dark/Light mode toggle button.
- **Visuals:** Displays a hamster image upon clicking the button.
- **Aesthetics:** 
  - Clean layout with modern CSS features.
  - Responsive design.
  - **Theme Support:** Supports both Light and Dark modes.
  - **Constraints:** Images are strictly contained within their wrappers to prevent overflow.

## Implementation Plan (Current Change)
1. **HTML:** 
   - Add a theme toggle button in the top-right corner.
2. **CSS:**
   - Define variables for Dark Mode (`--bg-color`, `--text-color`, `--container-bg`).
   - Implement transition effects for smooth theme switching.
   - Ensure `image-wrapper` has strict `max-width` and `overflow: hidden`.
3. **JavaScript:**
   - Add theme toggle logic to switch a class on the `body` element.
   - Save theme preference to `localStorage`.
4. **Git:**
   - Commit and push changes to the repository for automatic deployment via GitHub Pages.
