import Layout from "@/components/Layout";

export default function RealtimePage() {
  return (
    <Layout>
      <div className="grid md:grid-cols-3 gap-4">
        <section className="card p-4">
          <h2 className="font-semibold">安保部分</h2>
          <div className="text-text-secondary text-sm mt-2">班级、学生、开始/结束、理由（占位）</div>
        </section>
        <section className="card p-4">
          <h2 className="font-semibold">停餐部分</h2>
          <div className="text-text-secondary text-sm mt-2">班级、学生、停餐情况（占位）</div>
        </section>
        <section className="card p-4">
          <h2 className="font-semibold">宿舍部分</h2>
          <div className="text-text-secondary text-sm mt-2">班级、学生、宿舍号（占位）</div>
        </section>
      </div>
    </Layout>
  );
}

