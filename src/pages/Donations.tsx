import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileCheck, Heart, Download } from "lucide-react";
import qrImage from "@/assets/qr-payment.png";

const Donations = () => {

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-[image:var(--gradient-hero)] text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Donation</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Your contribution helps us continue our mission to empower mountain communities and create lasting positive change
          </p>
        </div>
      </section>

      {/* Tax Benefits */}
      <section className="py-8 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 text-center flex-wrap">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-secondary" />
              <span className="font-semibold">80G Tax Benefits Available</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="h-6 w-6 text-secondary" />
              <span className="font-semibold">Instant Receipt Generation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* QR Code Payment */}
          <Card className="shadow-[var(--shadow-strong)] mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Scan QR Code to Donate</CardTitle>
              <CardDescription>Use any UPI app to scan and pay instantly</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-center">
                <div className="bg-white p-6 rounded-lg shadow-[var(--shadow-soft)]">
                  <img 
                    src={qrImage} 
                    alt="Payment QR Code for YOOO Pahad Foundation donations" 
                    className="w-80 h-80 object-contain"
                  />
                </div>
              </div>
              <div className="text-center">
                <p className="font-semibold text-lg mb-2">UPI ID: yooopahad@upi</p>
                <p className="text-sm text-muted-foreground">
                  Scan the QR code with any UPI app like Google Pay, PhonePe, or Paytm
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Bank Transfer Details */}
          <Card className="shadow-[var(--shadow-strong)] mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Bank Transfer Details</CardTitle>
              <CardDescription>You can also transfer directly to our bank account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 p-6 rounded-lg space-y-3">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Account Name:</span>
                  <span className="text-muted-foreground">YOOO Pahad Foundation</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Account Number:</span>
                  <span className="text-muted-foreground">1234567890123456</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">IFSC Code:</span>
                  <span className="text-muted-foreground">SBIN0001234</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium">Bank Name:</span>
                  <span className="text-muted-foreground">State Bank of India</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="font-medium">Branch:</span>
                  <span className="text-muted-foreground">Shimla Main Branch</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                After payment, please email your transaction details to <span className="font-medium">donations@yooopahad.org</span>
              </p>
            </CardContent>
          </Card>

          {/* 80G Certificate Info */}
          <Card className="shadow-[var(--shadow-strong)] border-secondary/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Shield className="h-6 w-6 text-secondary" />
                80G Tax Benefit Certificate
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-secondary/10 p-5 rounded-lg border-l-4 border-secondary">
                <p className="font-semibold text-secondary mb-2 flex items-center gap-2">
                  <FileCheck className="h-5 w-5" />
                  Tax Deduction Benefits
                </p>
                <p className="text-sm text-muted-foreground mb-3">
                  YOOO Pahad Foundation is registered under Section 80G of the Income Tax Act. 
                  All donations are eligible for tax deductions as per Income Tax rules.
                </p>
                <p className="text-sm font-medium mb-3">
                  You will receive your 80G certificate via email within 48 hours of your donation.
                </p>
              </div>
              
              <div className="text-center pt-2">
                <Button variant="outline" size="lg" asChild>
                  <a href="/80g-certificate-sample.pdf" download>
                    <Download className="h-5 w-5 mr-2" />
                    Download Sample 80G Certificate
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground mt-3">
                  Click to download a sample certificate format
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Your Donation Matters</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Education for Children</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  ₹5,000 can provide school supplies and books for 10 children for an entire year
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Environmental Conservation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  ₹2,500 can plant and maintain 100 trees, contributing to reforestation efforts
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Women's Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  ₹10,000 can support skill training for 5 women to start their own businesses
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Donations;
