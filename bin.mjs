#!/usr/bin/env node
import { rmSync } from 'fs'
process.argv.slice(2).forEach(p => p && rmSync(p, { recursive: true, force: true }))