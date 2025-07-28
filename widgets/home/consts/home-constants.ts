import { BookOpen, CreditCard, User } from "lucide-react";

export const homeConstants = {
  heroSection: {
    title1: "Frontend",
    title2: "Interview",
    description: "내가 하려고 만든 프론트엔드 면접을 위한 연습과 복습.",
    button: "Start Now",
    buttonLink: "/questions",
  },
  featuresSection: {
    title: "합격을 위한 모든 준비",
    description:
      "다음 프론트엔드 면접을 성공적으로 마칠 수 있도록 돕는 도구들을 한자리에 모았습니다.",
    features: [
      {
        icon: BookOpen,
        title: "Practice Questions",
        description: "프론트엔드 면접을 위한 핵심 질문과 상세한 해설 제공",
        href: "/questions",
        gradient: "from-blue-50 to-indigo-50",
        iconColor: "text-blue-600",
      },
      {
        icon: CreditCard,
        title: "Flashcards",
        description: "중요 개념을 빠르게 복습할 수 있는 인터랙티브 플래시카드",
        href: "/flashcard",
        gradient: "from-purple-50 to-pink-50",
        iconColor: "text-purple-600",
      },
      {
        icon: User,
        title: "Track Progress",
        description:
          "학습 기록을 확인하고 자주 보는 질문을 즐겨찾기로 관리하세요",
        href: "/mypage",
        gradient: "from-emerald-50 to-teal-50",
        iconColor: "text-emerald-600",
      },
    ],
  },
  ctaSection: {
    title: "지금 시작해볼까요?",
    description:
      "일단 나는 이걸로 프론트엔드 면접을 준비할거에요. 당신도 함께 시작해보세요.",
    button: "Browse Questions",
    buttonLink: "/questions",
    trustIndicators: [
      {
        text: "무료로 시작",
        color: "bg-emerald-400",
      },
      {
        text: "결제 없이 사용 가능",
        color: "bg-blue-400",
      },
      {
        text: "바로 연습 시작 가능",
        color: "bg-purple-400",
      },
    ],
  },
};
