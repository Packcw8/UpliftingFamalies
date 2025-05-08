import React, { useState, useEffect } from "react";
import GeneralInfo from "./components/GeneralInfo";
import { submitForm } from "./api/submitForm";
import VisitDetails from "./components/VisitDetails";
import ServiceCodes from "./components/ServiceCodes";
import SkillDevelopment from "./components/SkillDevelopment";
import TimeUnits from "./components/TimeUnits";
import VisitFlags from "./components/VisitFlags";
import MileageRoutes from "./components/MileageRoutes";
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

export default function App() {
  const [token, setToken] = useState(null);
  const [isRegistering, setIsRegistering] = useState(false);

  useEffect(() => {
    const savedToken = localStorage.getItem("auth_token");
    if (savedToken) setToken(savedToken);
  }, []);

  useEffect(() => {
    fetch("/api/cors-test", {
      method: "GET",
      credentials: "include"
    })
      .then((res) => res.json())
      .then((data) => console.log("✅ CORS working:", data))
      .catch((err) => console.error("❌ CORS failed:", err));
  }, []);

  const handleLogin = async ({ email, password }) => {
    try {
      const response = await fetch("/api/auth/jwt/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username: email, password })  // ✅ FIXED
      });

      if (!response.ok) throw new Error("Login failed");

      const data = await response.json();
      setToken(data.access_token);
      localStorage.setItem("auth_token", data.access_token);
    } catch (error) {
      alert("Login error: " + error.message);
    }
  };

  const handleRegister = async (formData) => {
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error("Registration failed");
      alert("Registration successful! You can now log in.");
      setIsRegistering(false);
    } catch (err) {
      alert(err.message);
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div>
          {isRegistering ? (
            <>
              <RegisterForm onSubmit={handleRegister} />
              <p className="text-center mt-4">
                Already have an account?{" "}
                <button className="text-blue-600 underline" onClick={() => setIsRegistering(false)}>
                  Login
                </button>
              </p>
            </>
          ) : (
            <>
              <LoginForm onSubmit={handleLogin} />
              <p className="text-center mt-4">
                Don’t have an account?{" "}
                <button className="text-blue-600 underline" onClick={() => setIsRegistering(true)}>
                  Register
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    );
  }

  const [form, setForm] = useState({
    case_name: "",
    case_number: "",
    service_date: "",
    service_provided: "",
    codes: [],
    completion_status: "",
    skill_deficit: "",
    developed_skill: "",
    participants: "",
    start_time: "",
    stop_time: "",
    units: 0,
    summary: "",
    clients_progress: "",
    safety_checkbox: "",
    abuse_checkbox: "",
    location_checkbox: "",
    miles: 0,
    at_units: 0,
    it_units: 0,
    signature: "",
    route_1: {
      from: "",
      to: "",
      at_start: "",
      at_stop: "",
      it_start: "",
      it_stop: ""
    },
    route_2: {},
    route_3: {}
  });

  return (
    <div className="p-4 max-w-3xl mx-auto space-y-6">
      <div className="flex justify-end">
        <button
          onClick={() => {
            localStorage.removeItem("auth_token");
            setToken(null);
          }}
          className="text-sm text-red-600 underline"
        >
          Logout
        </button>
      </div>

      <h1 className="text-2xl font-bold">Generate Visit Document</h1>

      <GeneralInfo form={form} setForm={setForm} />
      <VisitDetails form={form} setForm={setForm} />
      <ServiceCodes form={form} setForm={setForm} />
      <SkillDevelopment form={form} setForm={setForm} />
      <TimeUnits form={form} setForm={setForm} />
      <VisitFlags form={form} setForm={setForm} />
      <MileageRoutes form={form} setForm={setForm} />

      <button
        onClick={() => submitForm(form)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Generate Word Document
      </button>
    </div>
  );
}

