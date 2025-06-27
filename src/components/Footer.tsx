"use client";

import Link from "next/link";
import styled from "styled-components";
import { Heart, Mail, Github, Twitter, Sparkles, Download, Shield, Camera, Calendar } from "lucide-react";

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
`;

const MainSection = styled.div`
  width: 100%;
  padding: 4rem 1rem;
  
  @media (min-width: 768px) {
    padding: 6rem 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
  }
`;

const BrandSection = styled.div``;

const BrandHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const LogoIcon = styled.div`
  width: 56px;
  height: 56px;
  background: rgba(59, 130, 246, 0.2);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
`;

const BrandInfo = styled.div``;

const BrandTitle = styled.h3`
  font-size: 2rem;
  font-weight: 900;
  color: white;
  margin: 0 0 0.25rem 0;
`;

const BrandSubtitle = styled.p`
  color: #93c5fd;
  font-weight: 600;
  font-size: 1.125rem;
  margin: 0;
`;

const Description = styled.p`
  color: #9ca3af;
  font-size: 1.125rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 28rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: rgba(31, 41, 55, 0.5);
  border-radius: 0.5rem;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FeatureIcon = styled.div`
  width: 32px;
  height: 32px;
  background: rgba(59, 130, 246, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const FeatureText = styled.span`
  color: #d1d5db;
  font-weight: 500;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  width: 48px;
  height: 48px;
  background: #374151;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  
  &:hover {
    background: #3b82f6;
    transform: scale(1.1);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.5);
  }
`;

const LinksSection = styled.div`
  padding-left: 0;
  
  @media (min-width: 1024px) {
    padding-left: 3rem;
  }
`;

const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const LinksColumn = styled.div``;

const ColumnTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 900;
  color: white;
  margin: 0 0 1.5rem 0;
`;

const LinksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const LinkItem = styled.li``;

const StyledLink = styled(Link)`
  color: #9ca3af;
  text-decoration: none;
  font-size: 1.125rem;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #60a5fa;
  }
`;

const DownloadSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  border-radius: 0.75rem;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 30px rgba(59, 130, 246, 0.5);
    background: linear-gradient(135deg, #2563eb, #7c3aed);
  }
`;

const DownloadIcon = styled.div`
  margin-right: 0.75rem;
`;

const DownloadInfo = styled.div`
  text-align: left;
`;

const DownloadTitle = styled.div`
  color: white;
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
`;

const DownloadSubtitle = styled.div`
  color: #bfdbfe;
  font-size: 0.875rem;
`;

const ComingSoon = styled.div`
  padding: 1rem;
  background: #374151;
  border-radius: 0.75rem;
  border: 1px solid #4b5563;
`;

const ComingSoonLabel = styled.div`
  color: #9ca3af;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const ComingSoonText = styled.div`
  color: #d1d5db;
  font-weight: 500;
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(31, 41, 55, 0.5);
  border-radius: 1rem;
  border: 1px solid #374151;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
  
  &.blue { color: #60a5fa; }
  &.green { color: #34d399; }
  &.purple { color: #a78bfa; }
  &.orange { color: #fb923c; }
`;

const StatLabel = styled.div`
  color: #9ca3af;
  font-size: 0.875rem;
`;

const BottomSection = styled.div`
  border-top: 1px solid #374151;
  background: #111827;
`;

const BottomContainer = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  
  @media (min-width: 640px) {
    padding: 2rem 1.5rem;
  }
`;

const BottomContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const BottomFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
`;

const Copyright = styled.p`
  color: #6b7280;
  font-size: 0.875rem;
  margin: 0;
`;

const MadeWith = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
  font-size: 0.875rem;
`;

const Disclaimer = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  background: rgba(146, 64, 14, 0.1);
  border: 1px solid rgba(146, 64, 14, 0.2);
  border-radius: 0.75rem;
`;

const DisclaimerText = styled.p`
  color: #fcd34d;
  font-size: 0.875rem;
  text-align: center;
  line-height: 1.6;
  margin: 0;
  
  strong {
    font-weight: 700;
  }
`;

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const features = [
    { icon: Shield, text: "完全プライベート" },
    { icon: Camera, text: "無制限写真保存" },
    { icon: Calendar, text: "詳細記録機能" },
  ];

  const links = [
    { href: "#features", label: "機能紹介" },
    { href: "/privacy", label: "プライバシーポリシー" },
    { href: "mailto:contact@tdrdays.app", label: "お問い合わせ" },
  ];

  return (
    <FooterContainer>
      <MainSection>
        <Container>
          <TopGrid>
            <BrandSection>
              <BrandHeader>
                <LogoIcon>
                  <Sparkles size={28} color="#60a5fa" />
                </LogoIcon>
                <BrandInfo>
                  <BrandTitle>TDR Days</BrandTitle>
                  <BrandSubtitle>思い出を記録するアプリ</BrandSubtitle>
                </BrandInfo>
              </BrandHeader>
              
              <Description>
                東京ディズニーリゾートでの特別な瞬間を美しく記録し、あなたの魔法の思い出を永遠に保存するアプリケーションです。
              </Description>

              <FeaturesGrid>
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <FeatureItem key={index}>
                      <FeatureIcon>
                        <Icon size={16} color="#93c5fd" />
                      </FeatureIcon>
                      <FeatureText>{feature.text}</FeatureText>
                    </FeatureItem>
                  );
                })}
              </FeaturesGrid>

              <SocialLinks>
                <SocialLink
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github size={20} color="#d1d5db" />
                </SocialLink>
                <SocialLink
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter size={20} color="#d1d5db" />
                </SocialLink>
              </SocialLinks>
            </BrandSection>

            <LinksSection>
              <LinksGrid>
                <LinksColumn>
                  <ColumnTitle>クイックリンク</ColumnTitle>
                  <LinksList>
                    {links.map((link) => (
                      <LinkItem key={link.href}>
                        <StyledLink href={link.href}>
                          {link.label}
                        </StyledLink>
                      </LinkItem>
                    ))}
                  </LinksList>
                </LinksColumn>

                <LinksColumn>
                  <ColumnTitle>ダウンロード</ColumnTitle>
                  <DownloadSection>
                    <DownloadButton
                      href="https://play.google.com/store/apps/details?id=com.hayatonakamura.TDRDays&hl=ja"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <DownloadIcon>
                        <Download size={24} color="white" />
                      </DownloadIcon>
                      <DownloadInfo>
                        <DownloadTitle>Google Play</DownloadTitle>
                        <DownloadSubtitle>Android用アプリ</DownloadSubtitle>
                      </DownloadInfo>
                    </DownloadButton>
                    
                    <ComingSoon>
                      <ComingSoonLabel>iOS版</ComingSoonLabel>
                      <ComingSoonText>現在開発中</ComingSoonText>
                    </ComingSoon>
                  </DownloadSection>
                </LinksColumn>
              </LinksGrid>
            </LinksSection>
          </TopGrid>

          <StatsSection>
            <StatItem>
              <StatNumber className="blue">無料</StatNumber>
              <StatLabel>完全無料アプリ</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber className="green">100%</StatNumber>
              <StatLabel>プライベート</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber className="purple">2パーク</StatNumber>
              <StatLabel>対応パーク</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber className="orange">無制限</StatNumber>
              <StatLabel>写真保存</StatLabel>
            </StatItem>
          </StatsSection>
        </Container>
      </MainSection>

      <BottomSection>
        <BottomContainer>
          <BottomContent>
            <BottomFlex>
              <Copyright>
                © {currentYear} Hayato Nakamura. All rights reserved.
              </Copyright>
              
              <MadeWith>
                <span>Made with</span>
                <Heart size={16} color="#ef4444" fill="currentColor" />
                <span>in Tokyo, Japan</span>
              </MadeWith>
            </BottomFlex>
            
            <Disclaimer>
              <DisclaimerText>
                <strong>免責事項：</strong> 本アプリは東京ディズニーリゾート®の公式アプリではありません。
                東京ディズニーリゾート®は株式会社オリエンタルランドの登録商標です。
                本アプリは個人開発者によって独立して開発されたものです。
              </DisclaimerText>
            </Disclaimer>
          </BottomContent>
        </BottomContainer>
      </BottomSection>
    </FooterContainer>
  );
};