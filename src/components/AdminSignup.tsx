// AdminSignup.tsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthForm } from "@/components/AuthForm";
import real_estate from "../assets/real_estate.jpg";
export default function AdminSignup() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (values: { email: string; password: string }) => {
    setIsLoading(true);
    setError("");
    try {
      await axios.post("/api/admin/signup", values);
      navigate("/admin-login");
    } catch (error) {
      setError("Failed to sign up. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="container flex flex-col items-center justify-center min-h-dvh"
      style={{
        backgroundImage: `url(${real_estate})`,
        backgroundSize: "cover", // optional
        backgroundPosition: "center", // optional
      }}
    >
      <AuthForm
        title="Admin Sign Up"
        onSubmit={handleSubmit}
        error={error}
        isLoading={isLoading}
        linkText="Already have an account? Log In"
        linkTo="/admin-login"
      />
    </div>
  );
}
