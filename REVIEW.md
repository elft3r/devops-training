# DevOps Training Site - Review & Improvement Plan

## Current State Assessment

The site is a Docusaurus-based DevOps training resource with a solid foundation but
significant gaps in content coverage. The best sections (Processes, Culture, What is
DevOps, Documentation-as-Code) are well-written, engaging, and have a strong personal
voice. However, many sections are stubs or incomplete.

### What's Working Well

- **Strong narrative sections**: `processes.mdx`, `culture.mdx`, `what-is-devops.mdx`,
  and `documentation-as-code.mdx` are well-written with real-world context
- **Logical structure**: The learning path
  (Intro -> Culture -> Processes -> Concepts -> Skills -> Tutorials) makes sense
- **Good Docusaurus setup**: Proper config, auto-generated sidebar, dark mode support

### Quality Assessment by Section

| Section                  | Status          | Notes                                      |
| ------------------------ | --------------- | ------------------------------------------ |
| Processes                | Excellent       | Detailed, covers DORA, 12-factor, diagrams |
| Documentation as Code    | Excellent       | In-depth, personal voice, good references  |
| What is DevOps           | Excellent       | Clear, accessible, well-cited              |
| Culture                  | Excellent       | Real-world examples, thoughtful analysis   |
| Introduction             | Good            | Solid but TOC is incomplete                |
| Concepts Overview        | Adequate        | Only 2 concepts linked                     |
| Tutorials Overview       | Adequate        | Philosophy is good, content is missing     |
| Infrastructure as Code   | Underdeveloped  | Ends with "...", very brief                |
| Skills                   | Underdeveloped  | Listed skills have no content pages        |
| Additional Resources     | Underdeveloped  | Only 1 link                                |
| Abbreviations            | Underdeveloped  | Only covers letters C, D, I                |
| Ops Tutorial             | Incomplete      | Just an intro, no actual tutorial steps    |
| Developer Tutorial       | Missing         | Referenced in TOC but file doesn't exist   |

---

## Improvement Plan

### Phase 1 - Quick Wins (fix what's broken) [DONE]

- [x] Fix typo: "Hand-on" -> "Hands-on" in `src/components/HomepageFeatures/index.js`
- [x] Fix grammar: "your a" -> "you're a" in `src/components/HomepageFeatures/index.js`
- [x] Update intro TOC in `docs/intro.mdx` to list all existing sections
- [x] Fix link formatting in `docs/concepts/concepts.mdx` (use proper Docusaurus links)
- [x] Fix link formatting in `docs/skills/skills.mdx` (use proper Docusaurus links)

### Phase 2 - Fill Content Gaps

- [ ] Expand `docs/concepts/infrastructure-as-code.mdx` with best practices, state
      management discussion, and tool descriptions (matching the depth of
      `documentation-as-code.mdx`)
- [ ] Create content pages for the 3 listed skills and link them from `skills.mdx`:
  - [ ] `docs/skills/documentation.mdx`
  - [ ] `docs/skills/naming.mdx`
  - [ ] `docs/skills/git.mdx`
- [ ] Flesh out `docs/additional-resources.mdx` with books, courses, blogs, podcasts,
      and tool documentation
- [ ] Expand `docs/abbreviations.mdx` with more common DevOps terms (SRE, SLA, SLO,
      SLI, K8s, VCS, API, DNS, VM, etc.)

### Phase 3 - Major New Content

- [ ] Build out the Operations tutorial (`docs/tutorials/ops-tutorial/`) with actual
      hands-on steps using the Example Voting App
- [ ] Create a Developer tutorial (`docs/tutorials/dev-tutorial/`) or remove the
      reference from `tutorials.mdx` if not planned
- [ ] Add more concept pages under `docs/concepts/`:
  - [ ] CI/CD
  - [ ] Containerization
  - [ ] Monitoring & Observability
  - [ ] Testing Strategies
- [ ] Add recommendations/solutions to `docs/culture.mdx` (currently only describes
      problems, not how to fix them)

### Phase 4 - Polish

- [ ] Ensure consistent tone and depth across all sections
- [ ] Add diagrams/visuals where they would aid understanding
- [ ] Cross-link related pages (e.g., link from Culture to relevant Concepts)
- [ ] Review all external links for freshness/validity
- [ ] Consider adding a glossary or search functionality
