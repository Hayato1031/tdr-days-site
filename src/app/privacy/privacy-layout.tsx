'use client';

import { useState } from 'react';
import { Shield, Globe, Lock, Database, UserCheck, Mail, ChevronRight, Check } from 'lucide-react';
import styled from 'styled-components';

// Styled Components for Layout with Header Spacing
const PageContainer = styled.div`
  min-height: 100vh;
  background: white;
  
  @media (prefers-color-scheme: dark) {
    background: #030712;
  }
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
  padding-top: 8rem; /* ヘッダーの高さ+余白 */
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(59, 130, 246, 0.1) 0%,
      rgba(147, 51, 234, 0.1) 25%,
      rgba(236, 72, 153, 0.1) 50%,
      rgba(59, 130, 246, 0.1) 75%,
      rgba(147, 51, 234, 0.1) 100%
    );
    animation: gradientShift 8s ease-in-out infinite;
  }
  
  @keyframes gradientShift {
    0%, 100% { opacity: 0.1; }
    50% { opacity: 0.3; }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const Section = styled.div`
  padding: 5rem 0;
  text-align: center;
  position: relative;
  z-index: 10;
  
  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`;

const HeroIcon = styled.div`
  width: 4rem;
  height: 4rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  color: white;
  margin-bottom: 1rem;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
`;

const LanguageToggle = styled.div`
  display: flex;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 0.5rem;
  padding: 0.25rem;
  justify-content: center;
  margin: 0 auto;
  max-width: fit-content;
  backdrop-filter: blur(8px);
`;

const LanguageButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  background: ${props => props.$active ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};
  color: ${props => props.$active ? 'white' : 'rgba(255, 255, 255, 0.7)'};
  
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    color: white;
  }
`;

const HighlightsSection = styled.section`
  background: #f9fafb;
  
  @media (prefers-color-scheme: dark) {
    background: #1f2937;
  }
`;

const HighlightsContainer = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
`;

const HighlightsGrid = styled.div`
  display: grid;
  gap: 2rem;
  text-align: center;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const HighlightCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
  
  @media (prefers-color-scheme: dark) {
    background: #111827;
  }
`;

const HighlightIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem auto;
`;

const HighlightTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
  
  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const HighlightDescription = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  
  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

const ContentSection = styled.section`
  background: white;
  
  @media (prefers-color-scheme: dark) {
    background: #111827;
  }
`;

const ContentContainer = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  padding: 0 1rem;
  
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoBox = styled.div`
  background: #dbeafe;
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid #bfdbfe;
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 58, 138, 0.2);
    border-color: rgba(30, 58, 138, 0.8);
  }
`;

const InfoText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
  
  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

const ContentSection2 = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const SectionNumber = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.25rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SectionText = styled.p`
  color: #6b7280;
  line-height: 1.6;
  margin: 0;
  
  @media (prefers-color-scheme: dark) {
    color: #d1d5db;
  }
`;

const ItemList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 0.75rem;
  border-radius: 0.375rem;
  background: #f9fafb;
  
  @media (prefers-color-scheme: dark) {
    background: #1f2937;
  }
`;

const ListItemContent = styled.div`
  font-size: 0.875rem;
`;

const ListItemTitle = styled.strong`
  color: #111827;
  
  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const ListItemText = styled.span`
  color: #6b7280;
  margin-left: 0.25rem;
  
  @media (prefers-color-scheme: dark) {
    color: #d1d5db;
  }
`;

const NoteBox = styled.div`
  padding: 0.75rem;
  border-radius: 0.375rem;
  background: #dbeafe;
  border: 1px solid #bfdbfe;
  
  @media (prefers-color-scheme: dark) {
    background: rgba(30, 58, 138, 0.2);
    border-color: rgba(30, 58, 138, 0.8);
  }
`;

const NoteText = styled.p`
  color: #1e3a8a;
  font-size: 0.875rem;
  margin: 0;
  
  @media (prefers-color-scheme: dark) {
    color: #bfdbfe;
  }
`;

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const ContactText = styled.p`
  color: #6b7280;
  
  @media (prefers-color-scheme: dark) {
    color: #d1d5db;
  }
`;

const ContactLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #3b82f6;
  font-weight: 500;
  text-decoration: none;
  
  &:hover {
    color: #2563eb;
    text-decoration: none;
  }
  
  @media (prefers-color-scheme: dark) {
    color: #60a5fa;
    
    &:hover {
      color: #93c5fd;
    }
  }
`;

const PrivacyPolicyContent = ({ lang }: { lang: 'ja' | 'en' }) => {
  if (lang === 'en') {
    return (
      <ContentWrapper>
        <InfoBox>
          <InfoText>
            Last Updated: June 27, 2025
          </InfoText>
        </InfoBox>

        <ContentSection2>
          <SectionTitle>
            <SectionNumber>
              <ChevronRight size={16} color="white" />
            </SectionNumber>
            1. Introduction
          </SectionTitle>
          <SectionText>
            TDR Days (the "App") is a visit tracking application for Tokyo Disneyland and Tokyo DisneySea, provided by Hayato Nakamura (the "Developer"). This Privacy Policy explains how the App collects, uses, and protects user information.
          </SectionText>
        </ContentSection2>

        <ContentSection2>
          <SectionTitle>
            <SectionNumber>
              <ChevronRight size={16} color="white" />
            </SectionNumber>
            2. Information We Collect
          </SectionTitle>
          <SectionText>The App collects the following information, all of which is stored locally on your device:</SectionText>
          <ItemList>
            {[
              { title: "Personal Information", desc: "Username, companion names (optional)." },
              { title: "Visit Records", desc: "Visit dates, park selection, weather, entry/exit times." },
              { title: "Activity Information", desc: "Attraction usage, restaurant visits, show attendance, etc." },
              { title: "Photo Data", desc: "User-captured/selected photos and their metadata." },
              { title: "Purchase Information", desc: "Shopping records (optional input)." },
            ].map((item, i) => (
              <ListItem key={i}>
                <Check size={16} color="#10b981" style={{ marginTop: '0.125rem', flexShrink: 0 }} />
                <ListItemContent>
                  <ListItemTitle>{item.title}:</ListItemTitle>
                  <ListItemText>{item.desc}</ListItemText>
                </ListItemContent>
              </ListItem>
            ))}
          </ItemList>
          <NoteBox>
            <NoteText>
              <strong>Note:</strong> The App does not collect or transmit any location (GPS) information.
            </NoteText>
          </NoteBox>
        </ContentSection2>

        {[
          { title: "3. How We Use Information", content: "Collected information is used solely for app features within your device: storing visit records, generating statistics, providing app functionality, and enabling data backup/restore." },
          { title: "4. Data Storage and Management", content: "All your data is stored locally on your device. The App does not transmit your data to any external servers. Your data will be completely deleted if you uninstall the App." },
          { title: "5. Information Sharing with Third Parties", content: "The App does not sell, rent, or share your personal information with any third parties, as all data is stored locally and is never transmitted externally." },
          { title: "6. Data Security", content: "The App relies on your device's built-in security features to protect your data. You are responsible for maintaining appropriate security settings on your device." },
          { title: "7. App Permissions", content: "The App requests Storage/Photos permission to save and read your photos and trip data, and Internet permission solely for checking app updates. No personal data is transmitted." },
          { title: "8. Children's Privacy", content: "The App does not knowingly collect personal information from children under 13. If you are under 13, please use the App only with parental consent." },
          { title: "9. Changes to This Privacy Policy", content: "This Privacy Policy may be updated as needed. We will notify you of any significant changes within the App." }
        ].map((section, i) => (
          <ContentSection2 key={i}>
            <SectionTitle>
              <SectionNumber>
                <ChevronRight size={16} color="white" />
              </SectionNumber>
              {section.title}
            </SectionTitle>
            <SectionText>{section.content}</SectionText>
          </ContentSection2>
        ))}

        <ContactSection>
          <ContactTitle>
            <Mail size={24} color="#3b82f6" />
            10. Contact Us
          </ContactTitle>
          <ContactText>If you have any questions about this Privacy Policy, please contact us at:</ContactText>
          <ContactLink href="mailto:contact@tdrdays.app">
            <Mail size={16} />
            contact@tdrdays.app
          </ContactLink>
        </ContactSection>
      </ContentWrapper>
    );
  }

  return (
    <ContentWrapper>
      <InfoBox>
        <InfoText>
          最終更新日: 2025年6月27日
        </InfoText>
      </InfoBox>

      <ContentSection2>
        <SectionTitle>
          <SectionNumber>
            <ChevronRight size={16} color="white" />
          </SectionNumber>
          1. はじめに
        </SectionTitle>
        <SectionText>
          TDR Days（以下「本アプリ」）は、Hayato Nakamura（以下「開発者」）が提供する東京ディズニーランドおよび東京ディズニーシーへの訪問記録管理アプリケーションです。本プライバシーポリシーは、本アプリがユーザーの情報をどのように収集、使用、保護するかについて説明します。
        </SectionText>
      </ContentSection2>

      <ContentSection2>
        <SectionTitle>
          <SectionNumber>
            <ChevronRight size={16} color="white" />
          </SectionNumber>
          2. 収集する情報
        </SectionTitle>
        <SectionText>本アプリは以下の情報を、すべてお客様のデバイス内にローカル保存します。</SectionText>
        <ItemList>
          {[
            { title: "個人情報", desc: "ユーザー名、同行者名（任意）。" },
            { title: "訪問記録", desc: "訪問日時、パーク選択、天気、入退園時間。" },
            { title: "アクティビティ情報", desc: "アトラクション利用記録、レストラン利用記録、ショー鑑賞記録など。" },
            { title: "写真データ", desc: "ユーザーが撮影・選択した写真とそのメタデータ。" },
            { title: "購入情報", desc: "ショッピング記録（任意入力）。" },
          ].map((item, i) => (
            <ListItem key={i}>
              <Check size={16} color="#10b981" style={{ marginTop: '0.125rem', flexShrink: 0 }} />
              <ListItemContent>
                <ListItemTitle>{item.title}：</ListItemTitle>
                <ListItemText>{item.desc}</ListItemText>
              </ListItemContent>
            </ListItem>
          ))}
        </ItemList>
        <NoteBox>
          <NoteText>
            <strong>注意：</strong>本アプリは、位置情報（GPS）を収集・送信することはありません。
          </NoteText>
        </NoteBox>
      </ContentSection2>

      {[
        { title: "3. 情報の使用目的", content: "収集した情報は、以下の目的のために本アプリ内でのみ使用されます：訪問記録の保存と管理、統計情報の生成、アプリ機能の提供、データバックアップ・復元機能の提供。" },
        { title: "4. データの保存と管理", content: "すべてのデータは、お客様のデバイス内にローカル保存されます。本アプリは、お客様のデータを外部サーバーへ送信することはありません。データはアプリをアンインストールすると完全に削除されます。" },
        { title: "5. 第三者への情報提供", content: "すべてのデータはローカルに保存され、外部へ送信されることはないため、本アプリがお客様の個人情報を第三者に販売、貸与、または共有することはありません。" },
        { title: "6. データのセキュリティ", content: "本アプリは、お客様のデバイスに搭載されているセキュリティ機能に依存してデータを保護します。お客様ご自身で、お使いのデバイスのセキュリティ設定を適切に管理する責任があります。" },
        { title: "7. アプリの権限", content: "本アプリは、ストレージ/写真権限（写真と訪問データの保存・読み込み）、およびインターネット権限（アプリのアップデート確認のみ）を要求します。個人データが送信されることはありません。" },
        { title: "8. お子様のプライバシー", content: "本アプリは、13歳未満のお子様から意図的に個人情報を収集することはありません。13歳未満の方は、保護者の同意を得た上で本アプリをご利用ください。" },
        { title: "9. プライバシーポリシーの変更", content: "本プライバシーポリシーは、必要に応じて更新される場合があります。重要な変更がある場合は、アプリ内でお知らせします。" }
      ].map((section, i) => (
        <ContentSection2 key={i}>
          <SectionTitle>
            <SectionNumber>
              <ChevronRight size={16} color="white" />
            </SectionNumber>
            {section.title}
          </SectionTitle>
          <SectionText>{section.content}</SectionText>
        </ContentSection2>
      ))}

      <ContactSection>
        <ContactTitle>
          <Mail size={24} color="#3b82f6" />
          10. お問い合わせ
        </ContactTitle>
        <ContactText>本プライバシーポリシーに関するご質問は、以下までお問い合わせください。</ContactText>
        <ContactLink href="mailto:contact@tdrdays.app">
          <Mail size={16} />
          contact@tdrdays.app
        </ContactLink>
      </ContactSection>
    </ContentWrapper>
  );
};

export default function PrivacyPolicyLayout() {
  const [language, setLanguage] = useState<'ja' | 'en'>('ja');

  const highlights = language === 'ja' ? [
    { icon: Lock, text: "完全ローカル保存", description: "データは外部送信されません" },
    { icon: Database, text: "デバイス内完結", description: "クラウド同期なし" },
    { icon: UserCheck, text: "プライバシー重視", description: "個人情報の外部共有なし" },
  ] : [
    { icon: Lock, text: "Fully Local Storage", description: "No external data transmission" },
    { icon: Database, text: "Device-Only", description: "No cloud sync" },
    { icon: UserCheck, text: "Privacy First", description: "No external sharing" },
  ];

  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <Container>
          <Section>
            <HeroIcon>
              <Shield size={32} color="white" />
            </HeroIcon>
            
            <HeroTitle>
              {language === 'ja' ? 'プライバシーポリシー' : 'Privacy Policy'}
            </HeroTitle>
            
            <HeroDescription>
              {language === 'ja' 
                ? 'TDR Daysはあなたのプライバシーを最優先に考えています。すべてのデータはデバイス内に安全に保存されます。'
                : 'TDR Days prioritizes your privacy above all. All your data is securely stored within your device.'
              }
            </HeroDescription>
            
            <LanguageToggle>
              <LanguageButton
                $active={language === 'ja'}
                onClick={() => setLanguage('ja')}
              >
                <Globe size={16} style={{ marginRight: '0.5rem' }} />
                日本語
              </LanguageButton>
              <LanguageButton
                $active={language === 'en'}
                onClick={() => setLanguage('en')}
              >
                <Globe size={16} style={{ marginRight: '0.5rem' }} />
                English
              </LanguageButton>
            </LanguageToggle>
          </Section>
        </Container>
      </HeroSection>

      {/* Key Highlights */}
      <HighlightsSection>
        <HighlightsContainer>
          <Section>
            <HighlightsGrid>
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <HighlightCard key={index}>
                    <HighlightIcon>
                      <Icon size={24} color="white" />
                    </HighlightIcon>
                    <HighlightTitle>{highlight.text}</HighlightTitle>
                    <HighlightDescription>{highlight.description}</HighlightDescription>
                  </HighlightCard>
                );
              })}
            </HighlightsGrid>
          </Section>
        </HighlightsContainer>
      </HighlightsSection>

      {/* Privacy Policy Content */}
      <ContentSection>
        <ContentContainer>
          <Section>
            <PrivacyPolicyContent lang={language} />
          </Section>
        </ContentContainer>
      </ContentSection>
    </PageContainer>
  );
}