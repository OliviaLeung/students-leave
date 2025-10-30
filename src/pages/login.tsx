import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      router.push("/");
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto card p-6">
        <h1 className="text-xl font-semibold">登录</h1>
        <form className="mt-4 space-y-3" onSubmit={onSubmit}>
          <input className="input w-full" placeholder="邮箱" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input className="input w-full" placeholder="密码" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          {error && <div className="text-danger text-sm">{error}</div>}
          <button className="btn-primary w-full" disabled={loading}>
            {loading ? "登录中..." : "登 录"}
          </button>
          <div className="text-xs text-text-secondary">演示账号：bzr@school.local / bzr123</div>
        </form>
      </div>
    </Layout>
  );
}

