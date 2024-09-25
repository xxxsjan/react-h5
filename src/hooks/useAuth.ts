import { useEffect } from "react";

export default function useAuth() {
  useEffect(() => {
    const token = window && localStorage.getItem("token");
    if (!token) {
      window && (location.href = "/login");
    }
  }, [])
}