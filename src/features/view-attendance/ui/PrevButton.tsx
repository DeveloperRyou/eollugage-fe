export default function PrevButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} aria-label="이전">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18L9 12L15 6" stroke="#969696" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </button>
  )
}
