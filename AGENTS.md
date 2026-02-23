# Agent Instructions

## ⚠️ CRITICAL REQUIREMENT ⚠️

**🚨 YOU MUST READ THE RELEVANT /docs FILE BEFORE GENERATING ANY CODE 🚨**

This is not optional. This is not a suggestion. This is a **MANDATORY** step.

---

## Workflow

When given any task that involves code generation:

1. **STOP** — Do not write any code yet
2. **IDENTIFY** — Determine which /docs file applies to your task
3. **READ** — Use the `read_file` tool to read the entire relevant /docs file
4. **UNDERSTAND** — Review the standards, patterns, and requirements
5. **IMPLEMENT** — Only now generate code that follows those standards

## Standards Location

All detailed standards are in `/docs`. You **MUST** refer to the relevant .md file BEFORE generating any code:

| Topic | File |
|-------|------|
| Authentication | [/docs/authentication.md](/docs/authentication.md) |
| UI Components | [/docs/ui-components.md](/docs/ui-components.md) |

When working on a task, follow the most specific applicable standard. If a request conflicts with these standards, ask for clarification before proceeding.

## DO NOT

- ❌ **Do NOT generate any code before reading the relevant /docs file for the task.**
- ❌ Do NOT skip reading the /docs file "because you think you know the pattern."
- ❌ Do NOT assume you can infer the standards without reading them.
- ❌ Do NOT deviate from the standards defined in /docs without explicit user approval.
- ❌ Do NOT introduce libraries, patterns, or approaches not covered by the /docs standards.
- ❌ Do NOT assume a pattern is acceptable just because it is common — always defer to the documented standard.

## Enforcement

If you generate code without first reading the relevant /docs file:
- ❌ The code will likely be incorrect
- ❌ You will waste the user's time with rework
- ❌ You will violate the project's established standards

**Always read first. Code second.**
