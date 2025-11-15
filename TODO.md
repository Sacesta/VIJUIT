# TODO: Split Hero.tsx into Separate Components

## Steps to Complete

- [ ] Create HeroSection.tsx component (extract hero section from Hero.tsx)
- [ ] Create MissionVision.tsx component (extract mission & vision section from Hero.tsx)
- [ ] Create Technologies.tsx component (extract technologies section from Hero.tsx)
- [ ] Create Portfolio.tsx component (extract portfolio section from Hero.tsx)
- [ ] Create Templates.tsx component (extract templates/features section from Hero.tsx)
- [ ] Update Header.tsx with header code from Hero.tsx (including dark mode and mobile menu)
- [ ] Update ProcessTimeline.tsx with process steps from Hero.tsx (rename to Process.tsx if needed)
- [ ] Update CallToAction.tsx with CTA section from Hero.tsx
- [ ] Update Footer.tsx with footer code from Hero.tsx
- [ ] Update App.tsx to import and render new components in order: Header, HeroSection, MissionVision, Technologies, Process, Portfolio, Templates, CallToAction, Footer
- [ ] Remove unused components: About.tsx, ServiceCards.tsx, Departments.tsx, CountUpStats.tsx, TestimonialCarousel.tsx
- [ ] Delete Hero.tsx file
- [ ] Handle shared state: Lift isDark to App.tsx and pass as props to components that need it (Header, HeroSection, MissionVision, Technologies, Process, Portfolio, Templates, CallToAction, Footer); keep mobileMenuOpen and portfolioIndex local to Header and Portfolio respectively
- [ ] Test the app to ensure rendering and functionality (dark mode, mobile menu, portfolio navigation)

## Notes
- Ensure all imports and dependencies are correctly handled.
- Use dark mode prop where applicable.
- After each major update, verify no errors.
