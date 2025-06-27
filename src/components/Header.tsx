"use client";

import Link from "next/link";
import { Download, Menu, X, Sparkles, Star, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";

// Keyframes for animations
const gradientAnimation = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

// Styled Components
const HeaderContainer = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: all 0.7s ease;
  background: ${props => 
    props.$isScrolled 
      ? 'linear-gradient(to right, rgba(15, 23, 42, 0.95), rgba(30, 58, 138, 0.95), rgba(88, 28, 135, 0.95))'
      : 'linear-gradient(to right, transparent, rgba(0, 0, 0, 0.1), transparent)'
  };
  backdrop-filter: ${props => props.$isScrolled ? 'blur(40px)' : 'none'};
  box-shadow: ${props => 
    props.$isScrolled 
      ? '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
      : 'none'
  };
  border-bottom: ${props => 
    props.$isScrolled 
      ? '1px solid rgba(96, 165, 250, 0.2)' 
      : 'none'
  };
`;

const HeaderContent = styled.div`
  width: 100%;
  padding: 0 1rem;
  
  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }
  
  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  
  &:hover {
    text-decoration: none;
  }
`;

const LogoIconWrapper = styled.div`
  position: relative;
`;

const LogoIcon = styled.div`
  position: relative;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 1.5rem;
  overflow: hidden;
  transition: all 0.3s ease;
  
  ${LogoContainer}:hover & {
    transform: scale(1.05);
  }
`;

const LogoIconContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom right, #3b82f6, #8b5cf6);
  transition: all 0.3s ease;
  
  ${LogoContainer}:hover & {
    background: linear-gradient(to bottom right, #2563eb, #7c3aed);
  }
`;

const LogoSparkles = styled(Sparkles)`
  width: 1.75rem;
  height: 1.75rem;
  color: white;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`;

const LogoGlow = styled.div`
  position: absolute;
  inset: -0.25rem;
  background: linear-gradient(to bottom right, #3b82f6, #8b5cf6);
  border-radius: 1.5rem;
  opacity: 0;
  filter: blur(8px);
  transition: all 0.3s ease;
  
  ${LogoContainer}:hover & {
    opacity: 0.2;
  }
`;

const LogoTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoText = styled.span`
  font-size: 1.875rem;
  font-weight: 900;
  background: linear-gradient(to right, white, #dbeafe, #e9d5ff);
  background-clip: text;
  color: transparent;
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1));
  transition: all 0.5s ease;
  
  ${LogoContainer}:hover & {
    background: linear-gradient(to right, #fce7f3, #dbeafe, #e9d5ff);
  }
`;

const LogoSubtext = styled.span`
  font-size: 0.875rem;
  color: #bfdbfe;
  font-weight: 600;
  margin-top: -0.25rem;
  opacity: 0.9;
  transition: color 0.3s ease;
  
  ${LogoContainer}:hover & {
    color: #fce7f3;
  }
`;

const DesktopNav = styled.div`
  display: none;
  align-items: center;
  gap: 0.25rem;
  
  @media (min-width: 1024px) {
    display: flex;
  }
`;

const NavItem = styled(Link)`
  position: relative;
  padding: 0.875rem 1.5rem;
  margin: 0 0.25rem;
  font-size: 0.875rem;
  font-weight: 700;
  color: #e5e7eb;
  transition: all 0.3s ease;
  border-radius: 1rem;
  text-decoration: none;
  overflow: hidden;
  
  &:hover {
    color: white;
    text-decoration: none;
  }
`;

const NavItemBackground = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(37, 99, 235, 0), rgba(147, 51, 234, 0), rgba(236, 72, 153, 0));
  transition: all 0.5s ease;
  
  ${NavItem}:hover & {
    background: linear-gradient(to right, rgba(37, 99, 235, 0.2), rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2));
  }
`;

const NavItemOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0);
  border-radius: 1rem;
  transition: all 0.3s ease;
  
  ${NavItem}:hover & {
    background: rgba(255, 255, 255, 0.05);
  }
`;

const NavItemContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const NavItemIcon = styled.div`
  opacity: 0.7;
  transition: opacity 0.3s ease;
  
  ${NavItem}:hover & {
    opacity: 1;
  }
`;

const NavItemUnderline = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: linear-gradient(to right, #60a5fa, #a855f7);
  transition: all 0.5s ease;
  
  ${NavItem}:hover & {
    width: 80%;
    left: 10%;
  }
`;

const DownloadSection = styled.div`
  margin-left: 2rem;
  padding-left: 2rem;
  border-left: 1px solid rgba(107, 114, 128, 0.5);
`;

const DownloadButton = styled.a`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 0.875rem;
  font-weight: 900;
  color: white;
  border-radius: 1rem;
  overflow: hidden;
  transform: scale(1);
  transition: all 0.3s ease;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  text-decoration: none;
  background: linear-gradient(to right, #ec4899, #a855f7, #3b82f6);
  
  &:hover {
    transform: scale(1.05);
    text-decoration: none;
    background: linear-gradient(to right, #db2777, #9333ea, #2563eb);
  }
`;

const DownloadButtonContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
`;

const DownloadIcon = styled(Download)`
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.75rem;
`;

const DownloadText = styled.span`
  letter-spacing: 0.025em;
`;

const MobileMenuButton = styled.button`
  display: block;
  position: relative;
  z-index: 50;
  padding: 1rem;
  border-radius: 1rem;
  background: linear-gradient(to bottom right, rgba(31, 41, 55, 0.7), rgba(17, 24, 39, 0.7));
  backdrop-filter: blur(24px);
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: linear-gradient(to bottom right, rgba(30, 58, 138, 0.7), rgba(88, 28, 135, 0.7));
    transform: scale(1.05);
  }
  
  @media (min-width: 1024px) {
    display: none;
  }
`;

const MenuIconContainer = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
`;

const MenuLine = styled.span<{ $isOpen: boolean; $position: 'top' | 'middle' | 'bottom' }>`
  position: absolute;
  left: 0;
  width: 1.5rem;
  height: 2px;
  background: ${props => {
    if (props.$position === 'top') return 'linear-gradient(to right, #93c5fd, #a855f7)';
    if (props.$position === 'middle') return 'linear-gradient(to right, #a855f7, #f472b6)';
    return 'linear-gradient(to right, #f472b6, #3b82f6)';
  }};
  transition: all 0.5s ease;
  
  ${props => {
    if (props.$position === 'top') {
      return css`
        top: 0.25rem;
        ${props.$isOpen && css`
          transform: rotate(45deg);
          top: 0.625rem;
          background: linear-gradient(to right, #f472b6, #3b82f6);
        `}
      `;
    }
    if (props.$position === 'middle') {
      return css`
        top: 0.625rem;
        ${props.$isOpen && css`
          opacity: 0;
        `}
      `;
    }
    return css`
      top: 1rem;
      ${props.$isOpen && css`
        transform: rotate(-45deg);
        top: 0.625rem;
        background: linear-gradient(to right, #3b82f6, #f472b6);
      `}
    `;
  }}
`;

const MobileMenuOverlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  inset: 0;
  z-index: 40;
  transition: all 0.5s ease;
  opacity: ${props => props.$isOpen ? 1 : 0};
  visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
  
  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileMenuBackdrop = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom right, rgba(0, 0, 0, 0.8), rgba(30, 58, 138, 0.5), rgba(88, 28, 135, 0.5));
  backdrop-filter: blur(8px);
`;

const MobileMenuContent = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 24rem;
  max-width: 90vw;
  background: linear-gradient(to bottom, #111827, rgba(30, 58, 138, 0.5), rgba(88, 28, 135, 0.5));
  backdrop-filter: blur(40px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: ${props => props.$isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.5s ease;
  border-left: 1px solid rgba(96, 165, 250, 0.2);
`;

const MobileMenuInner = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MobileMenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  border-bottom: 1px solid rgba(96, 165, 250, 0.2);
`;

const MobileMenuLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MobileMenuLogoIcon = styled.div`
  width: 3rem;
  height: 3rem;
  background: linear-gradient(to bottom right, #ec4899, #a855f7, #3b82f6);
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

const MobileMenuLogoSparkles = styled(Sparkles)`
  width: 1.5rem;
  height: 1.5rem;
  color: white;
`;

const MobileMenuLogoText = styled.div``;

const MobileMenuLogoTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 900;
  background: linear-gradient(to right, white, #dbeafe);
  background-clip: text;
  color: transparent;
`;

const MobileMenuLogoSubtitle = styled.div`
  font-size: 0.875rem;
  color: #dbeafe;
  font-weight: 600;
`;

const MobileMenuCloseButton = styled.button`
  padding: 0.75rem;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(4px);
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const MobileMenuNav = styled.div`
  flex: 1;
  padding: 2rem;
`;

const MobileMenuNavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const MobileMenuNavItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1.25rem 1.5rem;
  font-size: 1.125rem;
  font-weight: 700;
  color: #e5e7eb;
  border-radius: 1rem;
  transition: all 0.3s ease;
  text-decoration: none;
  border: 1px solid transparent;
  
  &:hover {
    color: white;
    background: linear-gradient(to right, rgba(37, 99, 235, 0.2), rgba(147, 51, 234, 0.2));
    border-color: rgba(96, 165, 250, 0.3);
    text-decoration: none;
  }
`;

const MobileMenuNavIcon = styled.div`
  margin-right: 1rem;
  opacity: 0.7;
  transition: opacity 0.3s ease;
  
  ${MobileMenuNavItem}:hover & {
    opacity: 1;
  }
`;

const MobileMenuNavText = styled.span`
  flex: 1;
`;

const MobileMenuNavDot = styled.div`
  width: 0.75rem;
  height: 0.75rem;
  background: linear-gradient(to bottom right, #60a5fa, #a855f7);
  border-radius: 50%;
  opacity: 0;
  transition: all 0.3s ease;
  
  ${MobileMenuNavItem}:hover & {
    opacity: 1;
  }
`;

const MobileMenuFooter = styled.div`
  padding: 2rem;
  border-top: 1px solid rgba(96, 165, 250, 0.2);
`;

const MobileDownloadButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.25rem 2rem;
  font-size: 1.125rem;
  font-weight: 900;
  color: white;
  background: linear-gradient(to right, #db2777, #a855f7, #3b82f6);
  border-radius: 1rem;
  transform: scale(1);
  transition: all 0.3s ease;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  text-decoration: none;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background: linear-gradient(to right, #be185d, #9333ea, #2563eb);
    transform: scale(1.05);
    text-decoration: none;
  }
`;

const MobileDownloadButtonContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
`;

const MobileDownloadIcon = styled(Download)`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.75rem;
`;

const MobileDownloadText = styled.span`
  letter-spacing: 0.025em;
`;

const MobileMenuFooterText = styled.div`
  margin-top: 1.5rem;
  text-align: center;
`;

const MobileMenuFooterMainText = styled.p`
  font-size: 0.875rem;
  color: #dbeafe;
  font-weight: 500;
  margin: 0;
`;

const MobileMenuFooterSubText = styled.p`
  font-size: 0.75rem;
  color: #9ca3af;
  margin: 0.5rem 0 0 0;
`;

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#features", label: "機能", icon: Star },
    { href: "/privacy", label: "プライバシー", icon: Heart },
    { href: "#download", label: "ダウンロード", icon: Download },
  ];

  return (
    <>
      <HeaderContainer $isScrolled={isScrolled}>
        <HeaderContent>
          <HeaderInner>
            {/* Enhanced Logo */}
            <LogoContainer href="/">
              <LogoIconWrapper>
                <LogoIcon>
                  <LogoIconContent>
                    <LogoSparkles />
                  </LogoIconContent>
                </LogoIcon>
                <LogoGlow />
              </LogoIconWrapper>
              
              <LogoTextWrapper>
                <LogoText>TDR Days</LogoText>
                <LogoSubtext>✨ 魔法の思い出帳 ✨</LogoSubtext>
              </LogoTextWrapper>
            </LogoContainer>

            {/* Enhanced Desktop Navigation */}
            <DesktopNav>
              {navItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <NavItem key={item.href} href={item.href}>
                    <NavItemBackground />
                    <NavItemOverlay />
                    <NavItemContent>
                      <NavItemIcon>
                        <IconComponent size={16} />
                      </NavItemIcon>
                      <span>{item.label}</span>
                    </NavItemContent>
                    <NavItemUnderline />
                  </NavItem>
                );
              })}
              
              <DownloadSection>
                <DownloadButton
                  href="https://play.google.com/store/apps/details?id=com.hayatonakamura.TDRDays&hl=ja"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <DownloadButtonContent>
                    <DownloadIcon />
                    <DownloadText>今すぐダウンロード</DownloadText>
                  </DownloadButtonContent>
                </DownloadButton>
              </DownloadSection>
            </DesktopNav>

            {/* Enhanced Mobile Menu Button */}
            <MobileMenuButton
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="メニューを開く"
            >
              <MenuIconContainer>
                <MenuLine $isOpen={isMobileMenuOpen} $position="top" />
                <MenuLine $isOpen={isMobileMenuOpen} $position="middle" />
                <MenuLine $isOpen={isMobileMenuOpen} $position="bottom" />
              </MenuIconContainer>
            </MobileMenuButton>
          </HeaderInner>
        </HeaderContent>
      </HeaderContainer>

      {/* Enhanced Mobile Menu Overlay */}
      <MobileMenuOverlay $isOpen={isMobileMenuOpen}>
        <MobileMenuBackdrop onClick={() => setIsMobileMenuOpen(false)} />
        
        {/* Enhanced Mobile Menu Content */}
        <MobileMenuContent $isOpen={isMobileMenuOpen}>
          <MobileMenuInner>
            {/* Enhanced Mobile Menu Header */}
            <MobileMenuHeader>
              <MobileMenuLogo>
                <MobileMenuLogoIcon>
                  <MobileMenuLogoSparkles />
                </MobileMenuLogoIcon>
                <MobileMenuLogoText>
                  <MobileMenuLogoTitle>TDR Days</MobileMenuLogoTitle>
                  <MobileMenuLogoSubtitle>✨ 魔法の思い出帳 ✨</MobileMenuLogoSubtitle>
                </MobileMenuLogoText>
              </MobileMenuLogo>
              <MobileMenuCloseButton onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} color="#e5e7eb" />
              </MobileMenuCloseButton>
            </MobileMenuHeader>

            {/* Enhanced Mobile Menu Navigation */}
            <MobileMenuNav>
              <MobileMenuNavList>
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <MobileMenuNavItem
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <MobileMenuNavIcon>
                        <IconComponent size={24} />
                      </MobileMenuNavIcon>
                      <MobileMenuNavText>{item.label}</MobileMenuNavText>
                      <MobileMenuNavDot />
                    </MobileMenuNavItem>
                  );
                })}
              </MobileMenuNavList>
            </MobileMenuNav>

            {/* Enhanced Mobile Menu Footer */}
            <MobileMenuFooter>
              <MobileDownloadButton
                href="https://play.google.com/store/apps/details?id=com.hayatonakamura.TDRDays&hl=ja"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MobileDownloadButtonContent>
                  <MobileDownloadIcon />
                  <MobileDownloadText>今すぐダウンロード</MobileDownloadText>
                </MobileDownloadButtonContent>
              </MobileDownloadButton>
              <MobileMenuFooterText>
                <MobileMenuFooterMainText>
                  🎪 完全無料・プライベート・広告なし 🎪
                </MobileMenuFooterMainText>
                <MobileMenuFooterSubText>
                  あなただけの魔法の思い出を記録しよう
                </MobileMenuFooterSubText>
              </MobileMenuFooterText>
            </MobileMenuFooter>
          </MobileMenuInner>
        </MobileMenuContent>
      </MobileMenuOverlay>
    </>
  );
};