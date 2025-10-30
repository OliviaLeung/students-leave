import Layout from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="card p-4">
          <div className="text-text-secondary text-sm">总班级数</div>
          <div className="text-2xl font-semibold mt-1">—</div>
        </div>
        <div className="card p-4">
          <div className="text-text-secondary text-sm">总学生数</div>
          <div className="text-2xl font-semibold mt-1">—</div>
        </div>
        <div className="card p-4">
          <div className="text-text-secondary text-sm">今日请假数</div>
          <div className="text-2xl font-semibold mt-1">—</div>
        </div>
        <div className="card p-4">
          <div className="text-text-secondary text-sm">请假统计</div>
          <div className="text-2xl font-semibold mt-1">—</div>
        </div>
      </div>
    </Layout>
  );
}

