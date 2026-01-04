export const SITE_CONFIG = {
  name: "Autenix",
  description:
    "Enterprise Compliance Platform. Automate compliance monitoring and governance across AWS, Azure, GCP, Kubernetes, and M365.",
  url: "https://autenix.co",
};

export const NAV_ITEMS = {
  platform: {
    label: "Platform",
    items: [
      {
        title: "Compliance Automation",
        // description: "Automated framework validation and continuous monitoring",
        href: "/products/compliance-automation",
        icon: "Shield",
      },
      {
        title: "Risk Management",
        // description: "Dynamic risk assessment with visual analytics",
        href: "/products/risk-management",
        icon: "AlertTriangle",
      },
      {
        title: "Trust Center",
        // description: "Showcase your compliance status to customers",
        href: "/products/trust-center",
        icon: "BadgeCheck",
      },
      {
        title: "Audit Readiness",
        // description: "Automated audit prep and evidence collection",
        href: "/products/audit-readiness",
        icon: "ClipboardCheck",
      },
      {
        title: "Policy Generator",
        // description: "Auto-generate compliant policies with version control",
        href: "/products/policy-generator",
        icon: "FileText",
      },
      {
        title: "Vendor Risk",
        // description: "Third-party risk management and monitoring",
        href: "/products/vendor-risk",
        icon: "Users",
      },
    ],
  },
  solutions: {
    label: "Solutions",
    items: [
      {
        title: "Startups",
        // description: "Get your first SOC 2 certification fast",
        href: "/solutions/startup",
        icon: "Rocket",
      },
      {
        title: "Growth",
        // description: "Scale your compliance program efficiently",
        href: "/solutions/growth",
        icon: "TrendingUp",
      },
      {
        title: "Enterprise",
        // description: "Enterprise-grade security and controls",
        href: "/solutions/enterprise",
        icon: "Building2",
      },
    ],
  },
  frameworks: {
    label: "Frameworks",
    items: [
      { title: "SOC 2", href: "/frameworks/soc-2" },
      { title: "ISO 27001", href: "/frameworks/iso-27001" },
      { title: "HIPAA", href: "/frameworks/hipaa" },
      { title: "PCI-DSS", href: "/frameworks/pci-dss" },
      { title: "GDPR", href: "/frameworks/gdpr" },
      { title: "NIST", href: "/frameworks/nist" },
      { title: "CIS", href: "/frameworks/cis" },
      { title: "FedRAMP", href: "/frameworks/fedramp" },
    ],
  },
  resources: {
    label: "Resources",
    items: [
      { title: "Documentation", href: "/docs" },
      { title: "Blog", href: "/blog" },
      { title: "Case Studies", href: "/case-studies" },
      { title: "Guides", href: "/guides" },
    ],
  },
};

export const FRAMEWORKS = [
  {
    name: "SOC 2",
    shortName: "SOC 2",
    slug: "soc-2",
    description: "Service Organization Control 2 - Trust Services Criteria",
    category: "Security",
    color: "blue",
  },
  {
    name: "ISO 27001",
    shortName: "ISO 27001",
    slug: "iso-27001",
    description: "International standard for information security management",
    category: "Security",
    color: "indigo",
  },
  {
    name: "HIPAA",
    shortName: "HIPAA",
    slug: "hipaa",
    description: "Health Insurance Portability and Accountability Act",
    category: "Healthcare",
    color: "emerald",
  },
  {
    name: "PCI-DSS",
    shortName: "PCI-DSS",
    slug: "pci-dss",
    description: "Payment Card Industry Data Security Standard",
    category: "Financial",
    color: "orange",
  },
  {
    name: "GDPR",
    shortName: "GDPR",
    slug: "gdpr",
    description: "General Data Protection Regulation",
    category: "Privacy",
    color: "purple",
  },
  {
    name: "NIST 800-53",
    shortName: "NIST",
    slug: "nist",
    description: "NIST Security and Privacy Controls",
    category: "Government",
    color: "red",
  },
  {
    name: "CIS Benchmarks",
    shortName: "CIS",
    slug: "cis",
    description: "Center for Internet Security Benchmarks",
    category: "Security",
    color: "cyan",
  },
  {
    name: "FedRAMP",
    shortName: "FedRAMP",
    slug: "fedramp",
    description: "Federal Risk and Authorization Management Program",
    category: "Government",
    color: "blue",
  },
];

export const PRODUCTS = [
  {
    title: "Compliance Automation",
    slug: "compliance-automation",
    tagline: "Get and stay compliant without the spreadsheet chaos",
    description:
      "Automated framework validation across ISO 27001, SOC 2, NIST, HIPAA, and more. Real-time compliance tracking with continuous monitoring.",
    icon: "Shield",
    features: [
      "Continuous compliance monitoring across all frameworks",
      "Automated evidence collection from your infrastructure",
      "Real-time alerts for compliance drift",
      "Gap analysis and remediation guidance",
      "Multi-framework support with control mapping",
    ],
    color: "blue",
  },
  {
    title: "Risk Management",
    slug: "risk-management",
    tagline: "Proactive risk assessment that drives smarter decisions",
    description:
      "Dynamic risk assessment with visual analytics and automated control mapping. Identify, assess, and mitigate risks before they become issues.",
    icon: "AlertTriangle",
    features: [
      "Visual risk dashboards and heat maps",
      "Automated risk scoring and prioritization",
      "Control effectiveness monitoring",
      "Risk treatment planning and tracking",
      "Executive reporting and insights",
    ],
    color: "amber",
  },
  {
    title: "Trust Center",
    slug: "trust-center",
    tagline: "Prove your security posture before prospects ask",
    description:
      "Showcase your compliance certifications, security policies, and documentation. Build trust with customers through transparency.",
    icon: "BadgeCheck",
    features: [
      "Public-facing compliance status page",
      "Document sharing with access controls",
      "Real-time certification status",
      "Customizable branding",
      "NDA-gated document access",
    ],
    color: "emerald",
  },
  {
    title: "Audit Readiness",
    slug: "audit-readiness",
    tagline: "Be audit-ready every day, not just audit week",
    description:
      "Automated audit prep and evidence collection. Streamline your audit process with organized evidence and clear documentation.",
    icon: "ClipboardCheck",
    features: [
      "Automated evidence collection",
      "Audit trail and version history",
      "Auditor collaboration portal",
      "Pre-built audit checklists",
      "Evidence export in auditor-ready format",
    ],
    color: "violet",
  },
  {
    title: "Policy Generator",
    slug: "policy-generator",
    tagline: "Professional policies in minutes, not months",
    description:
      "Auto-generate compliant policies tailored to your organization. Version control, employee acknowledgment tracking, and audit-ready exports.",
    icon: "FileText",
    features: [
      "Template library for all major frameworks",
      "Customizable policy templates",
      "Version control and change tracking",
      "Employee acknowledgment workflows",
      "Multi-format export (PDF, Word, HTML)",
    ],
    color: "rose",
  },
  {
    title: "Vendor Risk Management",
    slug: "vendor-risk",
    tagline: "Manage third-party risk at scale",
    description:
      "Comprehensive vendor risk management. Assess, monitor, and manage your vendor ecosystem with automated security reviews.",
    icon: "Users",
    features: [
      "Vendor security assessments",
      "Continuous vendor monitoring",
      "Risk scoring and tiering",
      "Automated questionnaire management",
      "Vendor inventory and tracking",
    ],
    color: "cyan",
  },
];

export const INTEGRATIONS = [
  { name: "AWS", icon: "/integrations/aws.svg", category: "Cloud" },
  { name: "Azure", icon: "/integrations/azure.svg", category: "Cloud" },
  { name: "Google Cloud", icon: "/integrations/gcp.svg", category: "Cloud" },
  {
    name: "Kubernetes",
    icon: "/integrations/k8s.svg",
    category: "Infrastructure",
  },
  {
    name: "Microsoft 365",
    icon: "/integrations/m365.svg",
    category: "Productivity",
  },
  { name: "GitHub", icon: "/integrations/github.svg", category: "DevOps" },
  { name: "GitLab", icon: "/integrations/gitlab.svg", category: "DevOps" },
  { name: "Okta", icon: "/integrations/okta.svg", category: "Identity" },
  {
    name: "Jira",
    icon: "/integrations/jira.svg",
    category: "Project Management",
  },
  { name: "Slack", icon: "/integrations/slack.svg", category: "Communication" },
];
