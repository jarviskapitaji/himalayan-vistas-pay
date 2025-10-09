import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CreditCard, Building2, QrCode, Shield, FileCheck, Heart } from "lucide-react";
import { toast } from "sonner";
import qrImage from "@/assets/qr-payment.png";

const Donations = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");

  const suggestedAmounts = [500, 1000, 2500, 5000, 10000];

  const handleDonation = () => {
    const amount = selectedAmount || parseFloat(customAmount);
    if (!amount || amount <= 0) {
      toast.error("Please enter a valid donation amount");
      return;
    }
    if (!donorName || !donorEmail) {
      toast.error("Please fill in all required fields");
      return;
    }
    
    toast.success(`Thank you for your generous donation of ₹${amount}! You'll receive a confirmation email shortly.`);
  };

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

      {/* Donation Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="shadow-[var(--shadow-strong)]">
            <CardHeader>
              <CardTitle className="text-2xl">Choose Your Donation Amount</CardTitle>
              <CardDescription>Select a suggested amount or enter a custom amount</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Amount Selection */}
              <div>
                <Label className="text-base mb-3 block">Select Amount (₹)</Label>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
                  {suggestedAmounts.map((amount) => (
                    <Button
                      key={amount}
                      variant={selectedAmount === amount ? "default" : "outline"}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount("");
                      }}
                      className="h-12"
                    >
                      ₹{amount.toLocaleString()}
                    </Button>
                  ))}
                </div>
                <div>
                  <Label htmlFor="custom-amount">Or Enter Custom Amount (₹)</Label>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="Enter amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(null);
                    }}
                    className="mt-2"
                  />
                </div>
              </div>

              {/* Donor Details */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Your Details</h3>
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={donorPhone}
                    onChange={(e) => setDonorPhone(e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Select Payment Method</h3>
                <Tabs defaultValue="online" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="online">
                      <CreditCard className="h-4 w-4 mr-2" />
                      Online
                    </TabsTrigger>
                    <TabsTrigger value="bank">
                      <Building2 className="h-4 w-4 mr-2" />
                      Bank Transfer
                    </TabsTrigger>
                    <TabsTrigger value="qr">
                      <QrCode className="h-4 w-4 mr-2" />
                      QR Code
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="online" className="space-y-4 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Online Payment Gateway</CardTitle>
                        <CardDescription>Pay securely using credit/debit card, UPI, or net banking</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button 
                          variant="hero" 
                          size="lg" 
                          className="w-full"
                          onClick={handleDonation}
                        >
                          Proceed to Payment
                        </Button>
                        <p className="text-xs text-muted-foreground mt-3 text-center">
                          You'll receive an automated receipt via email after successful payment
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="bank" className="space-y-4 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Bank Transfer Details</CardTitle>
                        <CardDescription>Transfer directly to our bank account</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium">Account Name:</span>
                            <span className="text-muted-foreground">YOOO Pahad Foundation</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Account Number:</span>
                            <span className="text-muted-foreground">1234567890123456</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">IFSC Code:</span>
                            <span className="text-muted-foreground">SBIN0001234</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Bank Name:</span>
                            <span className="text-muted-foreground">State Bank of India</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Branch:</span>
                            <span className="text-muted-foreground">Shimla Main Branch</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          After transfer, please email your transaction details to donations@yooopahad.org 
                          to receive your 80G certificate and automated receipt.
                        </p>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="qr" className="space-y-4 mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Scan QR Code to Pay</CardTitle>
                        <CardDescription>Use any UPI app to scan and pay instantly</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex justify-center">
                          <div className="bg-white p-4 rounded-lg shadow-[var(--shadow-soft)]">
                            <img 
                              src={qrImage} 
                              alt="Payment QR Code" 
                              className="w-64 h-64 object-contain"
                            />
                          </div>
                        </div>
                        <div className="text-center space-y-2">
                          <p className="font-medium">UPI ID: yooopahad@upi</p>
                          <p className="text-sm text-muted-foreground">
                            After payment, please send a screenshot to donations@yooopahad.org along with your details 
                            to receive your automated receipt and 80G certificate.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>
            </CardContent>
          </Card>

          {/* 80G Certificate Info */}
          <Card className="mt-8 shadow-[var(--shadow-soft)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileCheck className="h-6 w-6 text-secondary" />
                80G Tax Benefit Certificate
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                YOOO Pahad Foundation is registered under Section 80G of the Income Tax Act. All donations are eligible 
                for tax deductions as per Income Tax rules. You will receive your 80G certificate via email within 48 hours 
                of your donation.
              </p>
              <div className="bg-secondary/10 p-4 rounded-lg border-l-4 border-secondary">
                <p className="font-semibold text-secondary mb-1">Important Note:</p>
                <p className="text-sm text-muted-foreground">
                  Please retain your donation receipt and 80G certificate for claiming tax deductions while filing your 
                  income tax returns.
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
