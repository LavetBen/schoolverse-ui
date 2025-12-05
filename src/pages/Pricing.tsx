import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      description: "Perfect for small schools getting started",
      features: [
        "Up to 200 students",
        "5 staff accounts",
        "Attendance tracking",
        "Basic reports",
        "Email support",
        "Mobile app access",
      ],
      notIncluded: [
        "Finance management",
        "Custom integrations",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Standard",
      price: "$79",
      period: "/month",
      description: "Most popular choice for growing schools",
      features: [
        "Up to 1,000 students",
        "20 staff accounts",
        "All Basic features",
        "Finance management",
        "Advanced analytics",
        "Priority support",
        "Parent portal",
        "SMS notifications",
      ],
      notIncluded: [
        "Custom integrations",
        "API access",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Premium",
      price: "$149",
      period: "/month",
      description: "For large institutions with complex needs",
      features: [
        "Unlimited students",
        "Unlimited staff",
        "All Standard features",
        "Custom integrations",
        "Full API access",
        "Dedicated account manager",
        "Custom reports",
        "White-label option",
        "24/7 phone support",
        "On-site training",
      ],
      notIncluded: [],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Choose the plan that fits your school's needs. All plans include a 30-day free trial.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-2xl border ${
                  plan.popular ? "border-primary shadow-xl scale-105" : "border-border shadow-card"
                } overflow-hidden card-hover`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 gradient-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className={`p-8 ${plan.popular ? "pt-14" : ""}`}>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <Link to={plan.cta === "Contact Sales" ? "#" : "/signup"}>
                    <Button
                      className={`w-full ${plan.popular ? "btn-primary" : ""}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </Link>
                </div>
                <div className="px-8 pb-8">
                  <p className="text-sm font-medium text-foreground mb-4">What's included:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-sm">
                        <i className="fas fa-check text-success"></i>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3 text-sm opacity-50">
                        <i className="fas fa-times text-muted-foreground"></i>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Can I switch plans later?",
                a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate your billing.",
              },
              {
                q: "Is there a setup fee?",
                a: "No, there are no setup fees. You can start using EduManage immediately after signing up.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
              },
              {
                q: "Can I get a refund?",
                a: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border border-border">
                <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                <p className="text-muted-foreground text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Contact our sales team for enterprise pricing and custom requirements.
          </p>
          <Button size="lg" className="bg-card text-foreground hover:bg-card/90 text-base px-8">
            <i className="fas fa-envelope mr-2"></i>
            Contact Sales
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
