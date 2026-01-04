"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  AlertTriangle, 
  BadgeCheck, 
  ClipboardCheck, 
  FileText, 
  Users,
  Check,
  TrendingUp,
  Activity,
  BarChart3,
  PieChart,
  CircleCheck,
  Clock,
  Bell,
  Zap
} from "lucide-react";
import { ReactNode } from "react";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  AlertTriangle,
  BadgeCheck,
  ClipboardCheck,
  FileText,
  Users,
};

const colorSchemes: Record<string, {
  primary: string;
  light: string;
  text: string;
  gradient: string;
  glow: string;
}> = {
  blue: {
    primary: "bg-blue-500",
    light: "bg-blue-50",
    text: "text-blue-600",
    gradient: "from-blue-500 to-blue-600",
    glow: "shadow-blue-500/20",
  },
  amber: {
    primary: "bg-amber-500",
    light: "bg-amber-50",
    text: "text-amber-600",
    gradient: "from-amber-500 to-orange-500",
    glow: "shadow-amber-500/20",
  },
  emerald: {
    primary: "bg-emerald-500",
    light: "bg-emerald-50",
    text: "text-emerald-600",
    gradient: "from-emerald-500 to-teal-500",
    glow: "shadow-emerald-500/20",
  },
  violet: {
    primary: "bg-violet-500",
    light: "bg-violet-50",
    text: "text-violet-600",
    gradient: "from-violet-500 to-purple-500",
    glow: "shadow-violet-500/20",
  },
  rose: {
    primary: "bg-rose-500",
    light: "bg-rose-50",
    text: "text-rose-600",
    gradient: "from-rose-500 to-pink-500",
    glow: "shadow-rose-500/20",
  },
  cyan: {
    primary: "bg-cyan-500",
    light: "bg-cyan-50",
    text: "text-cyan-600",
    gradient: "from-cyan-500 to-blue-500",
    glow: "shadow-cyan-500/20",
  },
};

interface DashboardMockupProps {
  type: "compliance" | "risk" | "trust" | "audit" | "policy" | "vendor";
  color?: string;
  icon?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export function DashboardMockup({ 
  type,
  color = "blue",
  icon = "Shield",
  title,
  subtitle,
  className = ""
}: DashboardMockupProps) {
  const scheme = colorSchemes[color] || colorSchemes.blue;
  const Icon = iconMap[icon] || Shield;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const },
    },
  };

  const dashboardConfigs: Record<string, ReactNode> = {
    compliance: <ComplianceDashboard scheme={scheme} />,
    risk: <RiskDashboard scheme={scheme} />,
    trust: <TrustDashboard scheme={scheme} />,
    audit: <AuditDashboard scheme={scheme} />,
    policy: <PolicyDashboard scheme={scheme} />,
    vendor: <VendorDashboard scheme={scheme} />,
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`relative ${className}`}
    >
      <div className={`bg-white rounded-2xl dashboard-shadow border border-surface-200 overflow-hidden`}>
        <motion.div 
          variants={itemVariants}
          className="flex items-center gap-2 px-5 py-4 bg-surface-50/80 border-b border-surface-200"
        >
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-surface-300 hover:bg-red-400 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-surface-300 hover:bg-yellow-400 transition-colors" />
            <div className="w-3 h-3 rounded-full bg-surface-300 hover:bg-green-400 transition-colors" />
          </div>
          <div className="flex-1 flex items-center justify-center gap-2">
            <div className={`w-6 h-6 rounded-md ${scheme.light} flex items-center justify-center`}>
              <Icon className={`w-3.5 h-3.5 ${scheme.text}`} />
            </div>
            <span className="text-sm font-medium text-surface-600">
              {title || "Autenix Dashboard"}
            </span>
          </div>
          <div className="w-16" />
        </motion.div>

        <div className="p-5 bg-gradient-to-b from-surface-50/50 to-white">
          {dashboardConfigs[type]}
        </div>
      </div>
    </motion.div>
  );
}

function ComplianceDashboard({ scheme }: { scheme: typeof colorSchemes.blue }) {
  const frameworks = [
    { name: "SOC 2", progress: 94, color: "bg-blue-500" },
    { name: "ISO 27001", progress: 87, color: "bg-indigo-500" },
    { name: "HIPAA", progress: 91, color: "bg-emerald-500" },
  ];

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
      }}
      className="space-y-4"
    >
      <motion.div 
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        className="grid grid-cols-3 gap-3"
      >
        <StatCard 
          label="Compliance Score" 
          value="94%" 
          trend="+2.3%" 
          color="emerald"
          icon={<CircleCheck className="w-4 h-4" />}
        />
        <StatCard 
          label="Controls Passed" 
          value="247/263" 
          color="blue"
          icon={<Shield className="w-4 h-4" />}
        />
        <StatCard 
          label="Active Alerts" 
          value="3" 
          color="amber"
          icon={<Bell className="w-4 h-4" />}
        />
      </motion.div>

      <motion.div 
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        className="bg-white rounded-xl p-4 border border-surface-200"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-surface-700">Framework Status</span>
          <span className="text-xs text-surface-500">Last updated: 2 min ago</span>
        </div>
        <div className="space-y-3">
          {frameworks.map((fw, i) => (
            <motion.div 
              key={fw.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center gap-3"
            >
              <span className="w-20 text-sm text-surface-600 font-medium">{fw.name}</span>
              <div className="flex-1 bg-surface-100 rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${fw.progress}%` }}
                  transition={{ duration: 1, delay: 0.6 + i * 0.15, ease: "easeOut" }}
                  className={`${fw.color} h-2 rounded-full progress-bar-animated`}
                />
              </div>
              <span className="w-10 text-sm text-surface-700 font-semibold text-right">{fw.progress}%</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function RiskDashboard({ scheme }: { scheme: typeof colorSchemes.blue }) {
  const risks = [
    { level: "Critical", count: 2, color: "bg-red-500" },
    { level: "High", count: 5, color: "bg-orange-500" },
    { level: "Medium", count: 12, color: "bg-yellow-500" },
    { level: "Low", count: 28, color: "bg-emerald-500" },
  ];

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
      }}
      className="space-y-4"
    >
      <motion.div 
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        className="grid grid-cols-3 gap-3"
      >
        <StatCard 
          label="Risk Score" 
          value="72" 
          trend="-5" 
          trendDown
          color="amber"
          icon={<AlertTriangle className="w-4 h-4" />}
        />
        <StatCard 
          label="Open Risks" 
          value="47" 
          color="rose"
          icon={<Activity className="w-4 h-4" />}
        />
        <StatCard 
          label="Mitigated" 
          value="156" 
          color="emerald"
          icon={<Check className="w-4 h-4" />}
        />
      </motion.div>

      <motion.div 
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        className="bg-white rounded-xl p-4 border border-surface-200"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-surface-700">Risk Distribution</span>
          <PieChart className="w-4 h-4 text-surface-400" />
        </div>
        <div className="flex items-center gap-4">
          <div className="relative w-20 h-20">
            <svg className="w-20 h-20 transform -rotate-90">
              <circle cx="40" cy="40" r="32" fill="none" stroke="#f1f5f9" strokeWidth="8" />
              <motion.circle 
                cx="40" cy="40" r="32" fill="none" strokeWidth="8"
                stroke="#10b981"
                strokeDasharray="200"
                initial={{ strokeDashoffset: 200 }}
                animate={{ strokeDashoffset: 80 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold text-surface-900">72</span>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-2">
            {risks.map((risk, i) => (
              <motion.div 
                key={risk.level}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-2"
              >
                <div className={`w-2 h-2 rounded-full ${risk.color}`} />
                <span className="text-xs text-surface-600">{risk.level}</span>
                <span className="text-xs font-semibold text-surface-900">{risk.count}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TrustDashboard({ scheme }: { scheme: typeof colorSchemes.blue }) {
  const certifications = [
    { name: "SOC 2 Type II", status: "verified", date: "Dec 2024" },
    { name: "ISO 27001", status: "verified", date: "Nov 2024" },
    { name: "HIPAA", status: "pending", date: "In Progress" },
  ];

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
      }}
      className="space-y-4"
    >
      <motion.div 
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        className="grid grid-cols-3 gap-3"
      >
        <StatCard 
          label="Trust Score" 
          value="A+" 
          color="emerald"
          icon={<BadgeCheck className="w-4 h-4" />}
        />
        <StatCard 
          label="Certifications" 
          value="5" 
          color="blue"
          icon={<Shield className="w-4 h-4" />}
        />
        <StatCard 
          label="Page Views" 
          value="2.4K" 
          trend="+18%"
          color="violet"
          icon={<TrendingUp className="w-4 h-4" />}
        />
      </motion.div>

      <motion.div 
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        className="bg-white rounded-xl p-4 border border-surface-200"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-surface-700">Active Certifications</span>
          <BadgeCheck className="w-4 h-4 text-emerald-500" />
        </div>
        <div className="space-y-2">
          {certifications.map((cert, i) => (
            <motion.div 
              key={cert.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center justify-between p-2 rounded-lg bg-surface-50"
            >
              <div className="flex items-center gap-2">
                {cert.status === "verified" ? (
                  <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-emerald-600" />
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center">
                    <Clock className="w-3 h-3 text-amber-600" />
                  </div>
                )}
                <span className="text-sm font-medium text-surface-700">{cert.name}</span>
              </div>
              <span className="text-xs text-surface-500">{cert.date}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function AuditDashboard({ scheme }: { scheme: typeof colorSchemes.blue }) {
  const tasks = [
    { name: "Evidence Collection", progress: 85, status: "active" },
    { name: "Control Testing", progress: 72, status: "active" },
    { name: "Documentation", progress: 100, status: "complete" },
  ];

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
      }}
      className="space-y-4"
    >
      <motion.div 
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        className="grid grid-cols-3 gap-3"
      >
        <StatCard 
          label="Audit Ready" 
          value="92%" 
          color="violet"
          icon={<ClipboardCheck className="w-4 h-4" />}
        />
        <StatCard 
          label="Evidence Items" 
          value="1,247" 
          color="blue"
          icon={<FileText className="w-4 h-4" />}
        />
        <StatCard 
          label="Days to Audit" 
          value="14" 
          color="amber"
          icon={<Clock className="w-4 h-4" />}
        />
      </motion.div>

      <motion.div 
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        className="bg-white rounded-xl p-4 border border-surface-200"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-surface-700">Preparation Tasks</span>
          <Zap className="w-4 h-4 text-violet-500" />
        </div>
        <div className="space-y-3">
          {tasks.map((task, i) => (
            <motion.div 
              key={task.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-surface-600">{task.name}</span>
                <span className={`text-xs font-medium ${task.status === 'complete' ? 'text-emerald-600' : 'text-blue-600'}`}>
                  {task.progress}%
                </span>
              </div>
              <div className="bg-surface-100 rounded-full h-1.5 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${task.progress}%` }}
                  transition={{ duration: 0.8, delay: 0.6 + i * 0.1 }}
                  className={`h-1.5 rounded-full ${task.status === 'complete' ? 'bg-emerald-500' : 'bg-violet-500'}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function PolicyDashboard({ scheme }: { scheme: typeof colorSchemes.blue }) {
  const policies = [
    { name: "Information Security Policy", status: "published", version: "v3.2" },
    { name: "Access Control Policy", status: "review", version: "v2.1" },
    { name: "Data Protection Policy", status: "published", version: "v4.0" },
  ];

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
      }}
      className="space-y-4"
    >
      <motion.div 
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        className="grid grid-cols-3 gap-3"
      >
        <StatCard 
          label="Total Policies" 
          value="24" 
          color="rose"
          icon={<FileText className="w-4 h-4" />}
        />
        <StatCard 
          label="Published" 
          value="21" 
          color="emerald"
          icon={<Check className="w-4 h-4" />}
        />
        <StatCard 
          label="Acknowledged" 
          value="98%" 
          color="blue"
          icon={<Users className="w-4 h-4" />}
        />
      </motion.div>

      <motion.div 
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        className="bg-white rounded-xl p-4 border border-surface-200"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-surface-700">Recent Policies</span>
          <FileText className="w-4 h-4 text-rose-500" />
        </div>
        <div className="space-y-2">
          {policies.map((policy, i) => (
            <motion.div 
              key={policy.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center justify-between p-2 rounded-lg bg-surface-50"
            >
              <div className="flex items-center gap-2">
                <div className={`w-1.5 h-8 rounded-full ${policy.status === 'published' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
                <div>
                  <p className="text-sm font-medium text-surface-700 truncate max-w-[160px]">{policy.name}</p>
                  <p className="text-xs text-surface-500">{policy.version}</p>
                </div>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                policy.status === 'published' 
                  ? 'bg-emerald-100 text-emerald-700' 
                  : 'bg-amber-100 text-amber-700'
              }`}>
                {policy.status}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function VendorDashboard({ scheme }: { scheme: typeof colorSchemes.blue }) {
  const vendors = [
    { name: "AWS", risk: "Low", score: 92, color: "emerald" },
    { name: "Stripe", risk: "Low", score: 88, color: "emerald" },
    { name: "Datadog", risk: "Medium", score: 75, color: "amber" },
  ];

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
      }}
      className="space-y-4"
    >
      <motion.div 
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        className="grid grid-cols-3 gap-3"
      >
        <StatCard 
          label="Total Vendors" 
          value="48" 
          color="cyan"
          icon={<Users className="w-4 h-4" />}
        />
        <StatCard 
          label="High Risk" 
          value="3" 
          color="rose"
          icon={<AlertTriangle className="w-4 h-4" />}
        />
        <StatCard 
          label="Avg Score" 
          value="84" 
          color="emerald"
          icon={<BarChart3 className="w-4 h-4" />}
        />
      </motion.div>

      <motion.div 
        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
        className="bg-white rounded-xl p-4 border border-surface-200"
      >
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-surface-700">Critical Vendors</span>
          <Users className="w-4 h-4 text-cyan-500" />
        </div>
        <div className="space-y-2">
          {vendors.map((vendor, i) => (
            <motion.div 
              key={vendor.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="flex items-center justify-between p-2 rounded-lg bg-surface-50"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white border border-surface-200 flex items-center justify-center">
                  <span className="text-xs font-bold text-surface-600">{vendor.name.slice(0, 2)}</span>
                </div>
                <span className="text-sm font-medium text-surface-700">{vendor.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  vendor.color === 'emerald' 
                    ? 'bg-emerald-100 text-emerald-700' 
                    : 'bg-amber-100 text-amber-700'
                }`}>
                  {vendor.risk}
                </span>
                <span className="text-sm font-semibold text-surface-900 w-8 text-right">{vendor.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function StatCard({ 
  label, 
  value, 
  trend, 
  trendDown = false,
  color = "blue",
  icon
}: { 
  label: string; 
  value: string; 
  trend?: string;
  trendDown?: boolean;
  color?: string;
  icon?: ReactNode;
}) {
  const colorClasses: Record<string, { bg: string; text: string; iconBg: string }> = {
    blue: { bg: "bg-blue-50", text: "text-blue-600", iconBg: "bg-blue-100" },
    emerald: { bg: "bg-emerald-50", text: "text-emerald-600", iconBg: "bg-emerald-100" },
    amber: { bg: "bg-amber-50", text: "text-amber-600", iconBg: "bg-amber-100" },
    rose: { bg: "bg-rose-50", text: "text-rose-600", iconBg: "bg-rose-100" },
    violet: { bg: "bg-violet-50", text: "text-violet-600", iconBg: "bg-violet-100" },
    cyan: { bg: "bg-cyan-50", text: "text-cyan-600", iconBg: "bg-cyan-100" },
  };

  const classes = colorClasses[color] || colorClasses.blue;

  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className={`${classes.bg} rounded-xl p-3 border border-transparent hover:border-surface-200 transition-all`}
    >
      <div className="flex items-start justify-between mb-1">
        <span className="text-xs text-surface-500 font-medium">{label}</span>
        {icon && (
          <div className={`w-6 h-6 rounded-md ${classes.iconBg} flex items-center justify-center ${classes.text}`}>
            {icon}
          </div>
        )}
      </div>
      <div className="flex items-end gap-2">
        <span className={`text-xl font-bold ${classes.text}`}>{value}</span>
        {trend && (
          <span className={`text-xs font-medium ${trendDown ? 'text-emerald-600' : 'text-emerald-600'}`}>
            {trend}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export function SimpleDashboardPreview({
  title,
  subtitle,
  icon: IconName = "Shield",
  color = "blue",
}: {
  title: string;
  subtitle?: string;
  icon?: string;
  color?: string;
}) {
  const Icon = iconMap[IconName] || Shield;
  const scheme = colorSchemes[color] || colorSchemes.blue;

  return (
    <div className="bg-white rounded-2xl border border-surface-200 overflow-hidden dashboard-shadow">
      <div className="flex items-center gap-3 p-4 border-b border-surface-100">
        <div className={`w-10 h-10 rounded-xl ${scheme.light} flex items-center justify-center`}>
          <Icon className={`w-5 h-5 ${scheme.text}`} />
        </div>
        <div>
          <h3 className="font-semibold text-surface-900">{title}</h3>
          {subtitle && <p className="text-sm text-surface-500">{subtitle}</p>}
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="h-3 bg-surface-100 rounded-full w-full" />
        <div className="h-3 bg-surface-100 rounded-full w-3/4" />
        <div className="h-3 bg-surface-100 rounded-full w-5/6" />
        <div className="grid grid-cols-3 gap-3 mt-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-surface-50 rounded-xl p-3">
              <div className="h-6 bg-surface-200 rounded mb-2" />
              <div className="h-2 bg-surface-100 rounded w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

