import { credits, currentYear } from '@/app/common/constants';
import { Component } from '@angular/core';

type FooterLinkType = {
  title: string,
  links: string[]

}

@Component({
  selector: 'app-landing-footer',
  standalone: true,
  imports: [],
  templateUrl: './landing-footer.component.html',
  styles: ``
})
export class LandingFooterComponent {
  currentYear = currentYear
  credits = credits

  footerLinks: FooterLinkType[] = [
    {
      title: "Solution",
      links: [
        "Enterprise",
        "By Workflow",
        "By Team"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "News & Press",
        "Our Customer",
        "Leadership",
        "Careers"
      ]
    },
    {
      title: "Resources",
      links: [
        "Blog",
        "Webinar & Events",
        "Podcast",
        "E-book & Guides"
      ]
    },
    {
      title: "Contact Us",
      links: [
        "Contact Sales",
        "Become Partner",
        "Affiliate Program"
      ]
    }
  ]
}
