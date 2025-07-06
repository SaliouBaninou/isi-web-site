import styles from '@/style/admin/layout.module.css';
import AdminSideBar from "@/components/admin/AdminSideBar";

export default function AdminLayout({ children }) {
  return (
      <div className={styles.container}>
        <AdminSideBar />
        <div className={styles.content}>
          {children}
        </div>
      </div>
  );
}
