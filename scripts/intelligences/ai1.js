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

// 1K chess (1024 bytes)
function F(c,h,e,S,s){if(c<9){c^=8;for(var T,o,L,E,D,O=20,N=-1e8,d=e&&F(c)>H,K=78-S<<9,a=c?X:-X,G,n,g,C,R,A;O++<98;)if((o=I[T=O])&&(G=o&Q^c)<7){A=G--&2?8:4;C=9-o&Q?l[61+G]:49;do{R=I[T+=l[C]];g=D=G|T+a-h?0:h;if(!R&&G|A<3|g||(1+R&Q^c)>9&&G|A>2){if(!(2-R&7))return K;for(E=n=G|I[T-a]-7?o&Q:6^c;E;E=!E&!d&&!(g=T,I[D=T<O?g-3:g+2]<Q|I[D+O-T]|I[T+=T-O])){L=(R&&l[R&7|32]*2-S-G)+(G?0:n-o&Q?110:(D&&14)+(A<2)+1);if(e>S||1<e&e==S&&L>2|d){I[T]=n,I[g]=I[D],I[O]=D?I[D]=0:0;L-=F(c,E=G|A>1?0:T,e,S+1,L-N);if(!(S|e-1|B-O|T-b|L<-H))return F(B=b),y=E,c&&W("F(8,y,2,0),F(8,y,1,0)",O);E=1-G|A<7|D|!e|R|o<Q||F(c)>H;I[O]=o;I[T]=R;I[D]=I[g];D?I[g]=G?0:9^c:0}if(L>N|!S&L==N&M()*2)if(N=L,e>1)if(S?s<L:(B=O,b=T,0))return N}}}while(!R&G>2||(T=O,G|A>2|Q<o&!R&&++C*--A))}return 768-K<N|d&&N}for(i=20;i<98;$(i).innerHTML="&#"+(I[i]&Q?9808+l[67+(I[i]&Q)]:9)+";")$(i+=i%X-8?1:3).lang=i-B}for(B=y=0,I=[],l=[];B<120;I[B++]=B%X?B/X%X<2|B%X<2?7:B/X&4?0:l[y++]:7)l[B]="ustvrtsuqqqqqqqqyyyyyyyy}{|~z|{}@G@TSb~?A6J57IKJT576,+-48HLSUmgukgg OJNMLK  IDHGFE".U(B)-64;
function V(s){I[b=s]&8?F(B=b):F(0,y,1,0)};	
