import Link from "next/link";
import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen">
      <header className="bg-white border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-6 bg-primary rounded-sm" />
            <span className="font-semibold text-lg">学生请假系统</span>
          </div>
          <nav className="hidden md:flex items-center gap-4 text-sm text-text-secondary">
            <Link href="/" className="hover:text-primary">总览</Link>
            <Link href="/classes" className="hover:text-primary">班级管理</Link>
            <Link href="/students" className="hover:text-primary">学生管理</Link>
            <Link href="/leave/register" className="hover:text-primary">请假登记</Link>
            <Link href="/leave/records" className="hover:text-primary">请假记录</Link>
            <Link href="/realtime" className="hover:text-primary">实时面板</Link>
            <Link href="/export" className="hover:text-primary">数据导出</Link>
          </nav>
          <div className="text-sm">
            <Link href="/login" className="text-primary hover:underline">登录</Link>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-6">
        {children}
      </main>
    </div>
  );
}

