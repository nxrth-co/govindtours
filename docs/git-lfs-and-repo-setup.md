# Git LFS & Repository Setup

## Overview
This document outlines the setup of Git LFS (Large File Storage), repository cleanup, and `.gitignore` hygiene for the Govind Tours project before initial release and synchronization with GitHub (`https://github.com/nxrth-co/govindtours.git`).

## Repository Hygiene & Ignored Files
The repository `.gitignore` was expanded to prevent build artifacts, ephemeral caches, environment secrets, and developer scratchpads from being committed:
- **Dependencies:** `node_modules/`, `pnp` files
- **Build Artifacts & Cache:** `.next/`, `out/`, `build/`, `dist/`, `.turbo`
- **Testing & Scratchpads:** `temp-tests/`, `temp/`, `tmp/`, `coverage/`, `assets/temp/`
- **Tool Outputs:** `graphify-out/` (AST and semantic indexing cache)
- **Secrets & Environments:** `.env`, `.env*.local`
- **OS Metadata:** `.DS_Store`, `Thumbs.db`, `desktop.ini`

## Git LFS (Large File Storage) Configuration
All heavy binary assets, photographic content, and future media files are tracked via Git LFS to keep repository clone sizes small and fast.
Tracked patterns in `.gitattributes`:
- `*.jpg`
- `*.jpeg`
- `*.png`
- `*.webp`
- `*.mp4`
- `*.webm`
- `*.mov`
- `*.zip`

## Remote Integration
- Remote URL: `https://github.com/nxrth-co/govindtours.git`
- Branch: `main`
