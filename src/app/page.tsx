"use client";

import { 
  Sparkles, 
  Camera, 
  Calendar, 
  BarChart3, 
  Shield, 
  Heart,
  Star,
  MapPin,
  Download,
  Smartphone
} from "lucide-react";
import styled from "styled-components";

// Styled Components for Layout with Header Spacing
const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 6rem; /* ヘッダーの高さ分のスペース */
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
  
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
  
  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`;

const HeroContent = styled.div`
  text-center;
  max-width: 64rem;
  margin: 0 auto;
  position: relative;
  z-index: 10;
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
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
  
  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const HeroTitleLine = styled.span`
  display: block;
  
  &.normal {
    color: #1f2937;
  }
  
  &.gradient {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
    background-clip: text;
    color: transparent;
    margin-top: 0.5rem;
  }
  
  @media (prefers-color-scheme: dark) {
    &.normal {
      color: white;
    }
  }
`;

const HeroDescription = styled.p`
  font-size: 1.25rem;
  color: #6b7280;
  margin-bottom: 2rem;
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  
  @media (prefers-color-scheme: dark) {
    color: #d1d5db;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 3rem;
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &.primary {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
      text-decoration: none;
      color: white;
    }
  }
  
  &.secondary {
    background: rgba(255, 255, 255, 0.1);
    color: #374151;
    border: 1px solid rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(8px);
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      text-decoration: none;
      color: #374151;
    }
    
    @media (prefers-color-scheme: dark) {
      color: white;
      border-color: rgba(255, 255, 255, 0.2);
      
      &:hover {
        color: white;
      }
    }
  }
`;

const AppPreviewContainer = styled.div`
  max-width: 20rem;
  margin: 0 auto;
`;

const AppPreviewFrame = styled.div`
  background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(135deg, #374151, #1f2937);
  }
`;

const AppPreviewScreen = styled.div`
  aspect-ratio: 9 / 19.5;
  background: white;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (prefers-color-scheme: dark) {
    background: #111827;
  }
`;

const AppPreviewContent = styled.div`
  text-align: center;
  padding: 2rem;
`;

const StatsSection = styled.section`
  background: #f9fafb;
  
  @media (prefers-color-scheme: dark) {
    background: #1f2937;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  text-align: center;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem auto;
`;

const StatValue = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
  
  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const StatLabel = styled.p`
  color: #6b7280;
  font-weight: 500;
  
  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

const FeaturesSection = styled.section`
  background: white;
  
  @media (prefers-color-scheme: dark) {
    background: #111827;
  }
`;

const SectionHeader = styled.div`
  text-center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 900;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
  background-clip: text;
  color: transparent;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.25rem;
  color: #6b7280;
  max-width: 32rem;
  margin: 0 auto;
  
  @media (prefers-color-scheme: dark) {
    color: #9ca3af;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #f3f4f6;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }
  
  @media (prefers-color-scheme: dark) {
    background: #1f2937;
    border-color: #374151;
  }
`;

const FeatureIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
  
  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const FeatureDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
  
  @media (prefers-color-scheme: dark) {
    color: #d1d5db;
  }
`;

const CTASection = styled.section`
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: white;
`;

const CTAContent = styled.div`
  text-center;
`;

const CTAIcon = styled.div`
  width: 4rem;
  height: 4rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem auto;
`;

const CTATitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.25rem;
  color: rgba(219, 234, 254, 0.8);
  margin-bottom: 2rem;
  max-width: 32rem;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  color: #3b82f6;
  background: white;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: #f9fafb;
    transform: translateY(-2px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    color: #3b82f6;
  }
`;

const CTANote = styled.p`
  margin-top: 1.5rem;
  font-size: 0.875rem;
  color: rgba(219, 234, 254, 0.6);
`;

export default function Home() {
  const features = [
    {
      icon: Calendar,
      title: "詳細なタイムライン記録",
      description: "アトラクション、レストラン、ショー、グリーティングなど、パークでの行動を時系列で記録。",
    },
    {
      icon: Camera,
      title: "写真と思い出を一緒に",
      description: "各アクティビティに写真を添付して、視覚的な思い出のアルバムを作成。",
    },
    {
      icon: BarChart3,
      title: "訪問データの可視化",
      description: "待ち時間の統計、よく訪れるアトラクション、ショーの当選率など、あなたのパーク体験を分析。",
    },
    {
      icon: Shield,
      title: "完全プライベート",
      description: "すべてのデータはあなたのデバイスにのみ保存。クラウド同期なし、広告なし、追跡なし。",
    },
    {
      icon: Heart,
      title: "お気に入り管理",
      description: "好きなアトラクションやレストランをお気に入り登録。次回の訪問計画に活用。",
    },
    {
      icon: Star,
      title: "カスタムタグ",
      description: "イベントや季節限定の体験に独自のタグを付けて、特別な思い出を整理。",
    },
  ];

  const stats = [
    { icon: Sparkles, value: "無料", label: "完全無料アプリ" },
    { icon: Shield, value: "100%", label: "プライベート" },
    { icon: MapPin, value: "2パーク", label: "対応パーク" },
    { icon: Camera, value: "無制限", label: "写真保存" },
  ];

  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <Container>
          <Section>
            <HeroContent>
              <HeroIcon>
                <Sparkles size={32} color="white" />
              </HeroIcon>
              
              <HeroTitle>
                <HeroTitleLine className="normal">魔法の思い出を、</HeroTitleLine>
                <HeroTitleLine className="gradient">いつでも手の中に。</HeroTitleLine>
              </HeroTitle>
              
              <HeroDescription>
                東京ディズニーリゾートでのあなたのすべての体験を記録し、
                大切な思い出を色鮮やかに保存するためのアプリです。
              </HeroDescription>

              <ButtonGroup>
                <Button
                  href="https://play.google.com/store/apps/details?id=com.hayatonakamura.TDRDays&hl=ja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary"
                >
                  <Download size={20} style={{ marginRight: '0.75rem' }} />
                  Google Playでダウンロード
                </Button>
                <Button href="#features" className="secondary">
                  機能を詳しく見る
                </Button>
              </ButtonGroup>

              {/* App Preview */}
              <AppPreviewContainer>
                <AppPreviewFrame>
                  <AppPreviewScreen>
                    <AppPreviewContent>
                      <Smartphone size={48} color="#9ca3af" style={{ margin: '0 auto 1rem auto' }} />
                      <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                        アプリスクリーンショット
                      </p>
                    </AppPreviewContent>
                  </AppPreviewScreen>
                </AppPreviewFrame>
              </AppPreviewContainer>
            </HeroContent>
          </Section>
        </Container>
      </HeroSection>

      {/* Stats Section */}
      <StatsSection>
        <Container>
          <Section>
            <StatsGrid>
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <StatItem key={stat.label}>
                    <StatIcon>
                      <Icon size={24} color="white" />
                    </StatIcon>
                    <StatValue>{stat.value}</StatValue>
                    <StatLabel>{stat.label}</StatLabel>
                  </StatItem>
                );
              })}
            </StatsGrid>
          </Section>
        </Container>
      </StatsSection>

      {/* Features Section */}
      <FeaturesSection id="features">
        <Container>
          <Section>
            <SectionHeader>
              <SectionTitle>すべての魔法を記録</SectionTitle>
              <SectionDescription>
                あなたのパーク体験を豊かにする機能が満載です
              </SectionDescription>
            </SectionHeader>

            <FeaturesGrid>
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <FeatureCard key={feature.title}>
                    <FeatureIcon>
                      <Icon size={24} color="white" />
                    </FeatureIcon>
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureDescription>{feature.description}</FeatureDescription>
                  </FeatureCard>
                );
              })}
            </FeaturesGrid>
          </Section>
        </Container>
      </FeaturesSection>

      {/* CTA Section */}
      <CTASection id="download">
        <Container>
          <Section>
            <CTAContent>
              <CTAIcon>
                <Download size={32} color="white" />
              </CTAIcon>
              
              <CTATitle>今すぐTDR Daysを始めよう</CTATitle>
              
              <CTADescription>
                次のパーク訪問を、もっと特別なものにしませんか？
                完全無料で、広告もありません。
              </CTADescription>

              <CTAButton
                href="https://play.google.com/store/apps/details?id=com.hayatonakamura.TDRDays&hl=ja"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download size={20} style={{ marginRight: '0.75rem' }} />
                Google Playで入手
              </CTAButton>
              
              <CTANote>iOS版は現在開発中です</CTANote>
            </CTAContent>
          </Section>
        </Container>
      </CTASection>
    </PageContainer>
  );
}