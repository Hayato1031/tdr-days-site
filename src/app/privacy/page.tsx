import type { Metadata } from "next";
import PrivacyPolicyLayout from "./privacy-layout";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "TDR Daysアプリのプライバシーポリシー",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyLayout />;
}
