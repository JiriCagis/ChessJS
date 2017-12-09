/**
This is an online 1-kilobyte chess game for one player against the computer. 
The source code takes just 1024 bytes, making it the world's smallest JavaScript chess program that implements
both castling and en passant capture. The only limitations are that you always play white pieces and pawn promotion
is limited to the queen. You can also play two "advanced" 2-kB chess levels. Try to checkmate them all!

This site uses two JavaScript variants of the remarkable Toledo Chess Game, which was a winning entry
in the JSK1 contest with this 1-kB chess version.
*/

 // aliases and constants
function $(i){return document.getElementById(i)}
String.prototype.U=String.prototype.charCodeAt;M=Math.random;W=setTimeout;X=10;Q=15;H=1e4

 // 2K chess (1683 bytes) - fast
 b=0;I=[];G=120;l=[5,3,4,6,2,4,3,5,1,1,1,1,1,1,1,1,9,9,9,9,9,9,9,9,13,11,12,14,10,12,11,13,0,99,0,306,297,495,846,-1,0,1,2,2,1,0,-1,-1,1,-10,10,-11,-9,9,11,10,20,-9,-11,-10,-20,-21,-19,-12,-8,8,12,19,21];function P(w,c,h,e,S,s){var t,o,L,E,d,O=e,N=-H*H,K=78-h<<X,p,g,n,m,A,q,r,C,J,a=y?-X:X;y^=8;G++;d=w||s&&s>=h&&P(0,0,0,21,0,0)>H;do{if(o=I[p=O]){q=o&Q^y;if(q<7){A=q--&2?8:4;C=o-9&Q?[53,47,61,51,47,47][q]:57;do{r=I[p+=l[C]];if(!w|p==w){g=q|p+a-S?0:S;if(!r&(!!q|A<3||!!g)||(r+1&Q^y)>9&&q|A>2){if(m=!(r-2&7))return y^=8,I[G--]=O,K;J=n=o&Q;E=I[p-a]&Q;t=q|E-7?n:(n+=2,6^y);while(n<=t){L=r?l[r&7|32]-h-q:0;if(s)L+=(1-q?l[(p-p%X)/X+37]-l[(O-O%X)/X+37]+l[p%X+38]*(q?1:2)-l[O%X+38]+(o&16)/2:!!m*9)+(!q?!(I[p-1]^n)+!(I[p+1]^n)+l[n&7|32]-99+!!g*99+(A<2):0)+!(E^y^9);if(s>h||1<s&s==h&&L>Q|d){I[p]=n,I[O]=m?(I[g]=I[m],I[m]=0):g?I[g]=0:0;L-=P(s>h|d?0:p,L-N,h+1,I[G+1],J=q|A>1?0:p,s);if(!(h||s-1|B-O|i-n|p-b|L<-H))return F(),G--,u=J;J=q-1|A<7||m||!s|d|r|o<Q||P(0,0,0,21,0,0)>H;I[O]=o;I[p]=r;m?(I[m]=I[g],I[g]=0):g?I[g]=9^y:0}if(L>N||s>1&&L==N&&!h&&M()<.5){I[G]=O;if(s>1){if(h&&c-L<0)return y^=8,G--,L;if(!h)i=n,B=O,b=p}N=L}n+=J||(g=p,m=p<O?g-3:g+2,I[m]<Q|I[m+O-p]||I[p+=p-O])?1:0}}}}while(!r&q>2||(p=O,q|A>2|o>Q&!r&&++C*--A))}}}while(++O>98?O=20:e-O);return y^=8,G--,N+H*H&&N>-K+1924|d?N:0}B=i=y=u=0;while(B++<120)I[B-1]=B%X?B/X%X<2|B%X<2?7:B/X&4?0:l[i++]|16:7;function F(){B=b;for(p=21;p<99;++p)if(q=$(p)){q.innerHTML="\xa0\u265f\u265a\u265e\u265d\u265c\u265b  \u2659\u2654\u2658\u2657\u2656\u2655".charAt(I[p]&Q);q.lang=p-B}}F();function V(s){i=(I[s]^y)&Q;if(i>8){b=s;F()}else if(B&&i<9){b=s;i=I[B]&Q;if((i&7)==1&(b<29|b>90))i=14^y;P(0,0,0,21,u,1);if(y)W("P(0,0,0,21,u,2),P(0,0,0,21,u,1)",250)}}
